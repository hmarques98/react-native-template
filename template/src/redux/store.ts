import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';

import sentryMiddleware from './middleware/sentryMiddleware';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [sentryMiddleware, ...getDefaultMiddleware()],

  devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export default store;
