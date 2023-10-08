export default class Student{
    constructor(
        private id: number, 
        readonly name: string, 
        public cgpa: string
    ){}

    getIds(): number{
        return this.id;
    }
}