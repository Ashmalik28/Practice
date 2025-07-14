interface Address {
        city? : string ; 
        country? : string ;
        pincode : number
        houseNumber : number;
};

interface User {
    name : string ;
    age : number ;
    address : Address ;
};

interface Office {
    address : Address ;
}
let user : User = {
    name : "Ashyam"  ,
    age : 17 ,
    address : {
        city : "Chandigarh" , 
        country : "India" , 
        pincode : 143001 ,
        houseNumber : 501 , 
    }
}

function isLegal(user : User) : boolean {
    return user.age >=18;
}

const ans: boolean = isLegal(user);

if(ans){
    console.log("He is Legal")
}else {
    console.log("He is not legal")
}