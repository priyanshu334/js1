//splice method 
//start , delete , insert 

const myArray = ['item1','item2','item3']
///delete 
const deletedItem = myArray.splice(1,2)
console.log(myArray)
console.log(deletedItem)
//insert 
myArray.splice(1,0,'inseted One')
console.log(myArray)