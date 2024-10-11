//block scoped vs function scopre 
//let and const are block scope 
//var is function scope
//pura ka pura js file ek main function scope hai to var ko hum kahi be acces kar sakte hai 

{
    let firstName = "harshit"
}
//rest parameters
function myFunc(a,b,...c){

    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)

}

myFunc(3,4,5,6,7,8,9)
