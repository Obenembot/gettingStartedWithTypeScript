import { Person } from './person'
import  * as _ from 'lodash'


let person = new Person("How","You")
person.firstName = "First Name"
person.lastName = "Last Name"
console.log(person)
// Reserve an array in TypeScript Using Lodash
var array = [1,2,3,4,5,6]
array =  _.reverse(array)
console.log(array)
