import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Student } from "../../env";
import { logout, selectStudents, selectToken } from "../Login/loginSlice";
import { addStudentAsync, delStudentAsync } from "./studentSlicer";

export const StudentComp = () => {
    const students = useAppSelector(selectStudents);
    const token = useAppSelector(selectToken);

    const dispatch = useAppDispatch()

    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")

    const handleAddStudent = () => {
        const stud = new Student(fName, lName, students[0]?.user);
        const student = { token, stud }
        dispatch(addStudentAsync(student))
    }

    const handleDeleteStudent = (id: number) => {
        const stud = { token, id }
        dispatch(delStudentAsync(stud))
    }

    return (
        <div>
            {students.map((stud, i) =>
                 <div key={i}>
                     First Name - {stud?.firstName}<br />
                     Last Name - {stud?.lastName}
                     <button onClick={() => handleDeleteStudent(stud.id)}>Delete Student</button>
                     <hr />
                 </div>)}

            < input onKeyUp = {(e)=> setfName(e.currentTarget.value)}/>
            < input onKeyUp = {(e)=> setlName(e.currentTarget.value)}/>
            < button onClick = {()=> handleAddStudent()}> Add Student</button >
            <br /><button onClick={() => dispatch(logout())}>Log Out</button>
        </div>
    )
}
export default StudentComp;

