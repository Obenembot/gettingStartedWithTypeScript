import { Person } from './classes'

function print<T>(name: T): T {

    return name;
}

var result = print("Hi")
console.log(result)
var result2 = print(5)
console.log(result2)


class Admin extends Person {

}
class Manager extends Person {

}

let manager = new Manager("Tabi", "Tabi","");
let admin = new Admin("Tabi", "Tabi","");

function personEcho<T extends Person>(person: T): T {

    // person.lastName
    return person;

}
var foo = personEcho(admin)