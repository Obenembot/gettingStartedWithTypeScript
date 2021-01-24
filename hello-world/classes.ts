
 export class Person {

    code: string | number=''

    constructor(public firstName: string, public lastName: string, public name: string) {

    }

    greet() {
        console.log("Hey There...")
    }
  
    getFullName(): string {

        return this.firstName + " " + this.lastName
    }
}

class Programmer extends Person {
    greet(){
        console.log("Hello World..")
    }
    greetNormalPeople() {
        super.greet()
    }
}
// You can use Polymorphysm
// var aProgrammer:Person = new Programmer("Tabi", "Oben");
var aProgrammer:Programmer = new Programmer("Tabi", "Oben","Oben");

aProgrammer.greetNormalPeople()