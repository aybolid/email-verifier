import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@src/app/store';
import SeveralEmailsRes from '@src/interfaces/SeveralEmailsRes';

interface VerifySeveralEmailsState {
  data: SeveralEmailsRes | undefined;
  isError: boolean;
  isLoading: boolean;
}

const initialState: VerifySeveralEmailsState = {
  data: undefined,
  isError: false,
  isLoading: false,
};

const verifySeveralEmailsSlice = createSlice({
  name: 'verifySeveralEmails',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<SeveralEmailsRes | undefined>) => {
      state.data = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setIsError, setIsLoading } =
  verifySeveralEmailsSlice.actions;

export const SelectAll = (state: RootState) => state.verifySeveralEmails;
export default verifySeveralEmailsSlice.reducer;
