const axios=require('axios')//importing axios i.e import axios
try{
    axios.get("https://jsonplaceholder.typicode.com/albums")//api link
    .then(response=>console.log(response.data))//print data after converting to json
}
catch(error)
{
    console.log(error)//print error
}
