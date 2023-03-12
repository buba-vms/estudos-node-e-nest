// npm - global command, comes with node
// npm --v

// local dependency - use it only for this project
// npm i <packageName>

// dev dependency - when you don't want to use it in production
// npm i <packageName> -D

// global dependcy - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important information about the project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello world')
