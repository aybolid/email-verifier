import { configureStore } from '@reduxjs/toolkit';
import verifySingleEmailReducer from '@src/features/verifySingleEmail/verifySingleEmailSlice';

export const store = configureStore({
  reducer: {
    verifySingleEmail: verifySingleEmailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
