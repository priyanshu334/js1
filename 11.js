const person = {
    firstName :"harshit",
    age:8,
    about:function(firstName,age){
        console.log(`the name is ${this.firstName},age is ${this.age}`)
    }
}
person.about()