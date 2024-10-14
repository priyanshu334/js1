//map works on key value pair 
const person = new Map()
person.set('firstName',"harshit");
person.set(1,'one');
console.log(person.get(1))
//printing the keys of map
// console.log(let key of person.keys())
for(let key of person.keys()){
    console.log(key)

}
//for printing both key value pair
for(let [key,value] of person.keys()){
    console.log(key,value)
}