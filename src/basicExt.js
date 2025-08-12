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

let string="Welcome to basics"
console.log(string.length)
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.trim())
console.log(string.slice(0,7))