
import {Person} from './classes'
// interface Person {
//     firstName: string
//     lastName: string

//     // Works Like final
//     readonly name: "Read Only Property";

//     getFullName(): string
// }

class Student implements Person {
    code: string | number ='';
    greet(): void {
        throw new Error("Method not implemented.");
    }
    name= "Read Only Property";
    firstName: string='';
    lastName: string='';
   

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

let aPerson: Person = new Student()

console.log(aPerson)
let someObj = {
    firstName: "Test",
    lastName: "Test",
    name: 'Ob',
    getFullName: () => "Test"
}

// aPerson = someObj
console.log(aPerson)
console.log(aPerson.getFullName())