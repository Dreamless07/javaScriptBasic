let array=[1,2,3,4,5,6]//array
let [a,b,c,...d]=array//array distraction, if you use ... then it takes the remaining data into a a single variable
console.log(d)

//for string
let data="Hello, this is a Java Developer".split(' ');//convert string to array then use array distraction
let [A,B,...C]=data
console.log(data)
console.log(A)
