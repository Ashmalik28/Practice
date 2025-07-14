interface People {
    name : string ,
    age : number ,
    // greet: () =>  string ,
}

let person : People = {
    name : "Ashyam" , 
    age : 22 ,
    // greet: () => {
    //    return "Hello" ;
    // }
}

class Manager implements People {
    name : string ;
    age : number ;
    constructor(name : string , age:number){
        this.name = name ;
        this.age = age;
    }
}

let user2 = new Manager("Chintu" , 30);