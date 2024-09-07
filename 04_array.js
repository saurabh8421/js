//Arrays

const myArr = [0,1,2,3]
const myHeros =[]

console.log(myArr)
console.log(myArr[1])

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)


// Array methods

myArr.push(6) //add values to the last of array
myArr.push(7)
console.log(myArr);

myArr.pop() // Remove last element from array
console.log(myArr);

myArr.unshift(9) //Add element to the start of array
console.log(myArr)
myArr.shift() // Remove element from start of array
console.log(myArr);


console.log(myArr.includes(0))

console.log(myArr.indexOf(3))

const newArr= myArr.join()

console.log(myArr);
console.log( newArr);
console.log(typeof newArr);

// slice or splice

console.log("A", myArr);
let mys1 = myArr.slice(1,3) // retrun a section of original array and does not perform any change in original
console.log(mys1)
console.log("B", myArr)

let mys2 = myArr.splice(1,3)// Cut the section from original array and returns that also includes "end" index
console.log(mys2)
console.log("C",myArr)