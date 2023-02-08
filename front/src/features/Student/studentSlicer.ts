import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../../app/hooks';
import { RootState, AppThunk } from '../../app/store';
import { Student } from '../../env';
import { addStudent, delStudent } from './studentAPI';

export interface StudentState {
    refresh:boolean;
  }
  
  const initialState: StudentState = {
    refresh:false,
  };
  
  export const addStudentAsync = createAsyncThunk(
    'student/addStudent',
    async (student: {token:string,stud:Student}) => {
      const response = await addStudent(student);
      return response;
    }
  );
  export const delStudentAsync = createAsyncThunk(
    'student/delStudent',
    async (stud: {token:string,id:number}) => {
      const response = await delStudent(stud);
      return response;
    }
  );
  
  export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(addStudentAsync.fulfilled, (state, action) => {
          state.refresh = !state.refresh;
        })
        .addCase(delStudentAsync.fulfilled, (state, action) => {
          state.refresh = !state.refresh;
        })
    },
  });  

export const selectRefresh = (state: RootState) => state.student.refresh;

 export default studentSlice.reducer;