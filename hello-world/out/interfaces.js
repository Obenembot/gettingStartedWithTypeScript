"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface Person {
//     firstName: string
//     lastName: string
//     // Works Like final
//     readonly name: "Read Only Property";
//     getFullName(): string
// }
var Student = /** @class */ (function () {
    function Student() {
        this.code = '';
        this.name = "Read Only Property";
        this.firstName = '';
        this.lastName = '';
    }
    Student.prototype.greet = function () {
        throw new Error("Method not implemented.");
    };
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
var aPerson = new Student();
console.log(aPerson);
var someObj = {
    firstName: "Test",
    lastName: "Test",
    name: 'Ob',
    getFullName: function () { return "Test"; }
};
// aPerson = someObj
console.log(aPerson);
console.log(aPerson.getFullName());
