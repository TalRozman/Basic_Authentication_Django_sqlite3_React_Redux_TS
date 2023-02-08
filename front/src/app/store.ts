import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { loginSlice } from '../features/Login/loginSlice';
import { studentSlice } from '../features/Student/studentSlicer';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    student:studentSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
