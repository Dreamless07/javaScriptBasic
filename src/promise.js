const demo=()=>{//lambda function
    return new Promise((resolve,reject)=>{//promise
    setTimeout(()=>{
    resolve("Data successfully updated");//either resolve or reject
    },5000)//time delay for 5 sec
    })
    }
demo()//call the function, check comments for more variation
.then(successVar=>{console.log(successVar)})//works only with succes
.catch(failVar=>{console.log(failVar)})//with failure

/*
can call through normal function:
function demo1(){
    demo()
}

can call through asynchronous function:
async function demo1(){
    let r=await demo() //use await when using async
    console.log(r)
}
*/