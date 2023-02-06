export const MYSERVER_URL = 'http://127.0.0.1:8000/';

export class Student{
    firstName:string = "";
    lastName:string = "";
    sId: number = 0;
    uId: number = 0;

    constructor(firstName:string, lastName:string, sId: number, uId: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.sId = sId;
        this.uId = uId;
    }
}

export class User{
    userName:string = "";
    Password:string = "";

    constructor(userName:string, Password:string){
        this.userName = userName;
        this.Password = Password;
    }
}