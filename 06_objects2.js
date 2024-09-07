//const tinderUser = new Object() //Singleton Object

const tinderUser = {} //Non Singleton Object

tinderUser.id="123abc"
tinderUser.name= "Samp"
tinderUser.isLoggedIn= false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"saurabh",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

let obj1= {1:"a",2:"b"}
let obj2= {3:"a",4:"b"}
const obj3= {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
let objC= {...obj1, ...obj2} // Spread operator does not works on objects

// const objC = Object.assign({},obj1,obj2,obj3)
console.log(objC)

// console.log(objC===obj1)


const users =[                                  // Array of objects

        {
            id:1,
            email:"saini@gmail.com"
        },
        {
            id:1,
            email:"saini@gmail.com"
        },
        {
            id:1,
            email:"saini@gmail.com"
        },
        {
            id:1,
            email:"saini@gmail.com"
        },


]

console.log(users[1].email)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))