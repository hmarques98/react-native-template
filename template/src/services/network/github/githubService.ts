import axios, { AxiosInstance, AxiosResponse, ResponseType } from 'axios';
import BuildConfig from 'react-native-config';
import { RepoReadme } from './models';
import HttpException from '../../../common/exceptions/HttpException';

// Apisauce instance
const instance = axios.create({
  baseURL: BuildConfig.GITHUB_API_BASE_URL,
  timeout: 30 * 1000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

type Args = Parameters<AxiosInstance['get']>;

/**
 * Wrapper around API instance.
 * By default, apisauce does not throw on failure.
 *
 * In order for useSWR() to correctly return the error,
 * the fetcher needs to throw on failure.
 */
const client = {
  /**
   * We're forwarding the types and arguments and then throwing on error.
   */
  ...instance,
  get: async <T>(...args: Args) => {
    const res = (await instance.get(...args)) as AxiosResponse<T>;
    return res.data;
  },
  // override more methods as needed
};

// API Paths
const paths = {
  getRepoReadme: () => '/repos/osamaq/react-native-template/readme',
};

// API implementation
const api = {
  getRepoReadme: () => client.get<RepoReadme>(paths.getRepoReadme()),
};

// API utilities

export const githubService = {
  api,
  paths,
  client,
};
