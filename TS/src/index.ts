//variable
//let id: number = 10;

//array
/* let ids: number[] = [1,4,66,7]; 
ids.forEach(n =>n.toString());
let students = ['test', 1, true, {}];
students.push(2); */

//union
//let name : number | string = 1;
//let std: (number | string)[] = [];

//any type
//let a : any;
//let a : any[]=[];    
//let test = (stu: any)=>{}
/* let std ={
    id: any,
    name: any
} */

//tuple
//let myTuple: [number, string] = [1, 'alamin'];
//myTuple.map(n=>console.log(n.toString()));

//enum
//enum Size { Small=1, Medium, Large };
//console.log(Size.Large);

//function
/* let f1 : Function;
let f1 = (a: number, b: string, c?: string): number=>{
    let abc: number = 10;
    return 1*abc;
} */

//funce sig
//let f1: (a: number, b: number)=>number;

//let std : object;

/* let std : {
    id: number,
    name: string,
    DOB: (date: Date) => void
} = {
    id : 10,
    name: 'alamin',
    DOB: (date: Date)=>console.log(date)
} */

//Aliases
/* type stingOrnumber = number | string;
let id: stingOrnumber; */

/* type Student = {
    readonly id: number,
    name: string,
    DOB: (date: Date) => void
} 

let student : Student = {
    id : 10,
    name: 'alamin',
    DOB: (date: Date)=>console.log(date)
} */

/* class Student{
    constructor(
        private id: number,
        readonly myname: string, 
        public cgpa: string
    ){}

    getIds(): number{
        return this.id;
    }
} */

import Student from './students.js'
const std = new Student(1, 'alamin', '3')
console.log(std.getIds());

