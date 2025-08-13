//without return type and parameters
function newFunc(){//function definition
    console.log("Functions begin from here")
}
newFunc()//function call

//with return type, without parameters
function newFunc1(){//function definition
    return "Function"
}
let call=newFunc1()//function call
console.log("call was",call)

//without return type, with parameters
function person(name,age){
    console.log(name,age)
}
person("Ajay",20)

//with return type and parameters
function person1(name,age){
    return `The person name is ${name} and age is ${age}`//inside { } are variables
}
let print=person1("Ajay",20)
console.log(print)


function add(a,b){
    return `The addition of ${a} and ${b} is ${a+b}`
}
let addition=add(30,20)
console.log(addition)

function sub(a,b){
    return `The subtraction of ${a} and ${b} is ${a-b}`
}
let subtraction=sub(30,20)
console.log(subtraction)


//function types:

//anonymous function
newVar=function(){
    console.log("This is an anonymous function")
}
newVar()

//lambda function
const demo=(name, age)=> console.log(name, age)
demo("Harry",23)

//constructor function
function constFunc(name,age){//if not passing any value during object creation, then we can write (name="Ajay",age=18) in parameters.
    this.name=name
    this.age=age
}
let ob=new constFunc("Sam",22)//object created and passed values
console.log(ob.name,ob.age)

