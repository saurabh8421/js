//Dates

let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,10,23,13,56,2)
// // console.log(myCreatedDate.toLocaleString())

// let myTimeStamp =  Date.now()

// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))

// console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate.getMonth()+1);

//String interpollation

console.log(`the date is ${newDate.getDay()}`)

let dn=newDate.toLocaleString('default',{
    weekday: "long"
    
})
console.log(dn)