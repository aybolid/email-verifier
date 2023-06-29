import { configureStore } from '@reduxjs/toolkit';

import verifierResultReducer from '../features/verifierResult/verifierResultSlice';

export const store = configureStore({
  reducer: { verifierResult: verifierResultReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
