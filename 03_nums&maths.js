const score=5000;
console.log(score)

const balance= new Number(100.44564)
console.log(balance)
console.log(typeof balance.toString())// for converting into string

// console.log(balance.toFixed(2))

// console.log(balance.toPrecision(6))

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'))


//+++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)); // change sign into positive
// console.log(Math.round(4.6));// round of value
// console.log(Math.floor(4.6));// round of value into floor value
// console.log(Math.ceil(4.6));// round of value into floor value

// console.log(Math.sqrt(49))

// console.log(Math.min(5,3,6,9))
// console.log(Math.max(5,3,6,9))

const otp= Math.floor(Math.random()*10)+1

console.log(otp)

const min=5
const max=10

console.log(Math.floor(Math.random()*(max-min+1)+min))