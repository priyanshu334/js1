//array methods

const myarr = ["Hello","cat","dog","lion"]
//creating a callback function

function isLength3(strings){
    return strings.length ===3
}
const ans = myarr.find(isLength3)
console.log(ans)
//what find method does is that it finds the firsts occurance of the condition of the callback function
