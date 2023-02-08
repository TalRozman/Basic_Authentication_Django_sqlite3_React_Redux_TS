import { MYSERVER_URL, Student, User } from "../../env";
import axios from "axios";

export const addStudent = async (student:{token:string,stud:Student}) => {
    const res = await axios.post(`${MYSERVER_URL}student/`,student.stud, {
      headers: {
        'Authorization': `Bearer ${student.token}`
      }
    });
    return res.data
  }
  
  export const delStudent = async (student:{token:string,id:number}) => {
    const res = await axios.delete(`${MYSERVER_URL}student/${student.id}`, {
      headers: {
        'Authorization': `Bearer ${student.token}`
      }
    });
    return res.data
  }