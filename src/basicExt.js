/*
let a=String(10)//typecasting
console.log(a+" "+typeof(a))

let num=String(10)
console.log(num)

let num1=Number("abc")
console.log(typeof num1)

let num2=null
console.log(typeof num2)

let b="abcd"
let c=12
console.log(b+c)//will concatenate different datatypes also
console.log(b-c)//=== is used to compare both value and datatype
*/

/*
function largest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

function largest(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b >= c) {
            return b;
        } else {
            return c;
        }
    }
}
*/

//all string related methods
let string="Welcome to basics,"
let message=" Let us start!"
console.log(string.length)
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.trim())
console.log(string.slice(0,7))
console.log(string.slice(-1))
console.log(string.replace("basics","Javascript"))
console.log(string.replaceAll("JavaScript","basics"))
console.log(string.charAt(1))
console.log(string.charCodeAt(1))
console.log(string.split(","))
console.log(string.repeat(4))
console.log(string.concat(message))
console.log(string.includes("Python"))
console.log(string.indexOf("and"))

let a=12.32965
console.log(a, typeof(a))
console.log(a.toFixed(3))
console.log(a.toPrecision(8))
console.log(a.isNumber)//works partially
console.log(Number.isNaN())
