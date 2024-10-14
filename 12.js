function hello(){
    console.log("hello world")
}
hello.call()

const user1 = {
    firstName : "harshit",
    age:8,
    printit: function(favmus){
        console.log(this.firstName,this.age,favmus)
    }
}
const user2 = {
    firstName : "harshisst",
    age:22,
}
//agar hume about call karna hai user2 ke liye to 
user1.printit.call(user2)
//using apply method
user1.printit.apply(user1,["arijit"])
//bind works same but returs a function
