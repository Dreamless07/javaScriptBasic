console.log("Hello");//semicolon is not mandatory
let a=10;//even float values or long
console.log(typeof a);//gives the type of data in the variable
a=10_889;//dot is not accepted instead use underscore
console.log(a);//if you wanna use same variable multiple times either use var or use let once and then don't use the keyword just define directly
var c=105
console.log(c);
const d=100
console.log(d);//cannot change the value of d after this line

let name="Henry"
console.log(name)
console.log(typeof name)

let b=null
console.log(b)
console.log(typeof b)//datatype is null , but stores as object(key value pair)

//object
let newObject={1:"Henry",2:"Bob"}
console.log(newObject)
console.log(typeof newObject)

//array
let newArray=[1,4,29.3,"hello",{"name":"Harry"}]//array can accept all datatypes
console.log(newArray)
console.log(typeof newArray)
