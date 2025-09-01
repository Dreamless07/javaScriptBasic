class contact{//class
    constructor(name, email, phone){//constructor
        this.name=name
        this.email=email
        this.phone=phone
    }
    details(){//method for printing
        let {name,email,phone}=this//instead of taking all fields, "this" will take it by splitting(array distraction)
        return `Name:${this.name} <br>
                Email:${this.email} <br>
                Phone:${this.phone}`
    }
}

function addContact(){//function
    let name=document.getElementById("name").value.trim()//take input by linking both id and var
    let email=document.getElementById("email").value.trim()
    let phone=document.getElementById("phone").value.trim()
    if(!name || !email || !phone){//if empty fields
        alert("Please fill all the fields to continue")
        return //return the alert if any field is empty
    }
    let ob=new contact(name, email, phone)//create object for class
    document.getElementById("show").innerHTML=ob.details()//print by id="show" in html through object by calling the method
}
