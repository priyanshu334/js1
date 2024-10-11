// const fruits = ["apple","mango","banana"]
// //for of loop
// for(let fruit of fruits){
//     console.log(fruit)
// }

// for(let index in fruits ){
//     console.log(fruits[index])
// }
// //array destructuring
// const myArray = ["value1","value2","value3","value4"]
// let v1 = myArray[0]
// let v2 = myArray[1]
// let [myvar1 , myvar2, ...myarr] = myArray;
// //objects 
// const character =  {name:"harshit", age:22}
// console.log(character.name )
// character.ok = 1
// const arr1 = [1,2,3]
// const arr2 = [2,4,5]
// const newarr= [...arr1,arr2]
// console.log(newarr)
// const arr3 = [...arr1,...arr2]
// console.log(arr3)
// const strarr = [..."abc"]
// console.log(strarr)

const band = {
    bandName:"macdonlda",
    famousSong:"burger",
    year:183
}
let {bandName,famousSong}= band