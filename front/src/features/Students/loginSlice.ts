import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Student, User } from '../../env';
import { getStudents, userLogin } from './loginAPI';

export interface logInState {
  accessToken: string;
  students: Student[];
  logged: boolean;
  error?: string;
}

const initialState: logInState = {
  accessToken: "",
  students: [],
  logged: false,
};

export const loginAsync = createAsyncThunk(
  'login/login',
  async (user: User) => {
    const response = await userLogin(user);
    return response;
  }
);
export const getStudentsAsync = createAsyncThunk(
  'login/getStudents',
  async (accessToken: string) => {
    const response = await getStudents(accessToken);
    return response;
  }
);
// export const loginAsync = createAsyncThunk(
//   'login/login',
//   async (user: User) => {
//     const response = await userLogin(user);
//     return response;
//   }
// );
// export const loginAsync = createAsyncThunk(
//   'login/login',
//   async (user: User) => {
//     const response = await userLogin(user);
//     return response;
//   }
// );
// export const loginAsync = createAsyncThunk(
//   'login/login',
//   async (user: User) => {
//     const response = await userLogin(user);
//     return response;
//   }
// );

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = "";
      state.logged = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.accessToken = action.payload?.access;
        state.logged = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = "Please try again";
      })
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        state.students = action.payload;
      })
  },
});

export const { logout } = loginSlice.actions;

export const selectToken = (state: RootState) => state.login.accessToken;
export const selectStudents = (state: RootState) => state.login.students;
export const selectRefresh = (state: RootState) => state.login.logged;
export const selectError = (state: RootState) => state.login.error;


export default loginSlice.reducer;
