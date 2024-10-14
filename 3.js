// //array methods

// const myarr = ["Hello","cat","dog","lion"]
// //creating a callback function

// function isLength3(strings){
//     return strings.length ===3
// }
// const ans = myarr.find(isLength3)
// console.log(ans)
// //what find method does is that it finds the firsts occurance of the condition of the callback function

//every method 
const numbers = [2,4,6,8,10];
const ans = numbers.every((number)=>number%2===0);
console.log(ans)
//callback function returns true or false 
//every method returns a boolean 
//example 
const userCart = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:20000},
    {productId:3,productName:"tv",price:15000}
]
 userCart.every((usercart)=>usercart.price<30000);
