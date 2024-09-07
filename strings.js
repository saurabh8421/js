//string interpolation

const fname="saurabh"
const lname="kumar"
console.log(
    `hello my name is ${fname} ${lname}`
)

const name=new String("saurabh Kumar")
console.log(name)
console.log(name.length)
console.log(name[0])
console.log(name.__proto__)
console.log(name.toLowerCase())
console.log(name.charAt(4))
console.log(name.lastIndexOf('a'))

const string2=name.substring(0,4)
const string3=name.slice(-8,8) //negative indexing allowed in slice

console.log(string2)
console.log(string3)

console.log(name.replace("Kumar","saini"))
console.log(name.includes("Kumar"));
console.log(name.split("-"))