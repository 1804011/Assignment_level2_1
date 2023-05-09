class Person{
     
     constructor(protected name:string,
        protected age:number){}
        getDetails():string{
            return `${this.name} is ${this.age} years old`
        }

     
}
class Student extends Person{
    constructor( name:string,
    age:number,private grade:number){
            super(name,age)
        }
        getGrade():number{
            return this.grade;
        }
    
}
const person=new Person("Sharif",23);
console.log(person.getDetails());
const student=new Student("Sharif",23,3.5);
console.log(student.getGrade());