const cloneIt = require('lodash')
const people = [
    {name: "anson", age: 45},
    {name: "brandon", age: 56},
]
let array = cloneIt.cloneDeep(people);
console.log(array);