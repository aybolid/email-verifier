import { configureStore } from '@reduxjs/toolkit';
import verifySeveralEmailsReducer from '@src/features/verifySeveralEmails/verifySeveralEmailsSlice';
import verifySingleEmailReducer from '@src/features/verifySingleEmail/verifySingleEmailSlice';

export const store = configureStore({
  reducer: {
    verifySingleEmail: verifySingleEmailReducer,
    verifySeveralEmails: verifySeveralEmailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
