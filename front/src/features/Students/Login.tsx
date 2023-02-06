import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Student, User } from '../../env';
import { getStudentsAsync, loginAsync, logout, selectError, selectRefresh, selectStudents, selectToken } from './loginSlice';

export const Login = () => {
  const logged = useAppSelector(selectRefresh);
  const students = useAppSelector(selectStudents);
  const error = useAppSelector(selectError);
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const [userName, setuserName] = useState("")
  const [password, setpassword] = useState("")

  useEffect(() => {
    dispatch(getStudentsAsync(token))
  }, [dispatch,logged])
  
  return (
    <div>
      {logged ?
        <>
          {students.map((stud, i) =>
            <div key={i}>
              First Name - {stud?.firstName}<br />
              Last Name - {stud?.lastName}
            </div>
          )}
          <br /><button onClick={() => dispatch(logout())}>Log Out</button>
        </> : <>
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