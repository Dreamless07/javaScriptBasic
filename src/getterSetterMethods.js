let data={
    fname:"Harry",
    lname:"Osborn",
    get fullname(){//get method
        return `${this.fname} ${this.lname}`;
    },
    set fullname(data){//set method
        [this.fname,this.lname]=data.split(' ')
    }
}

console.log(data.fullname)
console.log(data.fullname="Peter Parker")
console.log(data.fullname)
