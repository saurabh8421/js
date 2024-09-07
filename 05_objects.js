// Singleton Object:made by constructors
    //object.create

//Object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Saurabh",
    [mySym]: "myKey1",
    age:22,
    location: "moradabad",
    email:"saurabhkumars272@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["name"])
console.log( jsUser[mySym])

//freeze changes in object
// Object.freeze(jsUser)

jsUser.email="saurabhsaini8421@gmail.com"
console.log(jsUser["email"])


jsUser.greetings= function(){
    console.log("hello js user");
}
jsUser.greetingsTwo= function(){
    console.log(`hello js user, ${this.name}`);
}
// console.log(jsUser)
console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())