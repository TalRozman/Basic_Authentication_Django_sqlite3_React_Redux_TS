export const MYSERVER_URL = 'http://127.0.0.1:8001/';

export class Student{
    firstName:string = "";
    lastName:string = "";
    user: number = 0;
    id: number = 0;

    constructor(firstName:string, lastName:string, uId: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.user = uId;
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