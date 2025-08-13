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


