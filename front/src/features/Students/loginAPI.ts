import { MYSERVER_URL, Student, User } from "../../env";
import axios from "axios";

export const userLogin = async (usr: User) => {
  const res = await axios.post(`${MYSERVER_URL}login/`, { "username": usr.userName, "password": usr.Password })
  return res.data
}

export const getStudents = async (token: string) => {
  const res = await axios.get(`${MYSERVER_URL}student/`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return res.data
}