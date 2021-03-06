//This example will workfine in Windows Operating system.
//In this example module is loaded twice even though we have only one module file
//This behaviour like this in windows as it is a case insensitive operating system
//However, this example will fail to work in linux machine due to case sensitive nature.
//TO understand this example check - https://medium.com/@lazlojuly/are-node-js-modules-singletons-764ae97519af

const counter1 = require("./counter.js");
const counter2 = require("./Counter.js");

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.value); // prints undefined as value is private
console.log(counter1.get()); // prints 2
console.log(counter2.get()); // pritns 1
