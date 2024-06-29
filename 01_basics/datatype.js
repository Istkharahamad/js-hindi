//primitive
//string number boolean,null.undefind,symbole,bigInt
const score=100
const scorNumber=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id =Symbol('123')

//Reference (non primitive)
//array,object,function
const heros=['sharukh khan ramchran']
let object={
    name:"istkhar",
    age:21,
}

const myFunction=function(){
    console.log("hello");  
}
console.log(typeof heros);

//stack(primitive),heap(non-primitive)
let myName="istkharAhamad"
console.log(myName);
let userOne={
    email:'user@gmail.com',
    upi: "user@ybl"
}
let userTwo=userOne
userTwo.email='istkhar@gmail'
console.log(userOne.emale);
console.log(userTwo.email)
