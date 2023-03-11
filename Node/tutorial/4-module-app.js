// Modules
// CommomJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./4-utils')
const data = require('./4-alternative-export')
require('./4-mind-granade')
const { victor, pedro, leandro } = names
const { items, singlePerson } = data

console.log(items)
console.log(singlePerson)

sayHi(victor)
sayHi(pedro)
sayHi(leandro)
require('./4-mind-granade')
