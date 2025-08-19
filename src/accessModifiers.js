let data={
    _name:"ajay",//private variable using _ both inside and outside of object
    demo:function(){
        console.log(this._name)
    }
}
data.demo()

let data1={
    #name1:"ajay",//strong private variable using # only inside object
    demo1:function(){
        console.log(this.#name1)
    }
}
data1.demo1()
console.log(data1.demo1)
