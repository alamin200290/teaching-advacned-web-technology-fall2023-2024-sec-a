export default class Student{
    name;
    constructor(name){
        this.name = name;
    }
    getname(){
        return this.name;
    }
}

export function test(){
    console.log('this is test function...');
}
