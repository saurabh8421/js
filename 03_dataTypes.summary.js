//data types are two types premitive & non-premitive
//a)premitive
// 7 types : string, Nubmber, Boolean,null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 200.3

const isLoggedIn = true
const ousideTemp = null
let userEmail;

const id =  Symbol("124")
const anotherId = Symbol("123")

console.log( id=== anotherId)

const bigNumber = 451651611615616n
console.log(typeof bigNumber)



// Reference Type (Non-premitive)
// Array, Objects, functions

const heros = ("shaktiman","naagraz","doga")
let myObj = {
    name: "saurabh",
    age: 22,

}

let myFunction=function(){
    console.log("hello World")
}

console.log(typeof heros)