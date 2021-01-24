"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, name) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
        this.code = '';
    }
    Person.prototype.greet = function () {
        console.log("Hey There...");
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello World..");
    };
    Programmer.prototype.greetNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
// You can use Polymorphysm
// var aProgrammer:Person = new Programmer("Tabi", "Oben");
var aProgrammer = new Programmer("Tabi", "Oben", "Oben");
aProgrammer.greetNormalPeople();
