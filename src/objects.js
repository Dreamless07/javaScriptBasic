let data = {
    "name": {
        "firstname": "Mohammad",
        "lastname": "Khan"
    },
    "branch": {
        "CSE": {
            "C1": "AIML",
            "C2": "AIDS"
        },
        "Mech": {
            "M1": "Robotics"
        }
    }
};
console.log(data)
console.log(data.name.firstname);
console.log(data.name.lastname);
console.log(data.branch.CSE.C1);
console.log(data.branch.CSE.C2);
console.log(data.branch.Mech.M1);

for (key in data.branch){
    console.log(key)// to get only key values from objects
}

//functions and objects
let func={
    "name":"ajay",
    "age":"22",
     "add":function()
    {
    console.log(func.name)//can use "this" keyword to fetch all objects of "name"
    }
}
func.add()//object name.function name to call it