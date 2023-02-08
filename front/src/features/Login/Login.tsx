import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Student, User } from '../../env';
import StudentComp from '../Student/StudentComp';
import { addStudentAsync, delStudentAsync, selectRefresh } from '../Student/studentSlicer';
import { getStudentsAsync, loginAsync, logout, selectError, selectLogged, selectStudents, selectToken } from './loginSlice';

export const Login = () => {
  const logged = useAppSelector(selectLogged);
  const error = useAppSelector(selectError);
  const token = useAppSelector(selectToken);
  const refresh = useAppSelector(selectRefresh);
  const dispatch = useAppDispatch();
  const [userName, setuserName] = useState("")
  const [password, setpassword] = useState("")

  useEffect(() => {
    dispatch(getStudentsAsync(token))
  }, [dispatch,logged,refresh])

  return (
    <div>
      {logged ? <StudentComp/> : <>
          <label>
            Username: {" "}
            <input onKeyUp={(e) => setuserName(e.currentTarget.value)} />
          </label><br />
          <label>
            Password: {" "}
            <input type={'password'} onKeyUp={(e) => setpassword(e.currentTarget.value)} /><br />
          </label>
          <button onClick={() => { const usr = new User(userName, password); dispatch(loginAsync(usr)) }}>Log In</button>
          <br />{error}
        </>}
    </div>
  );
}

export default Login;