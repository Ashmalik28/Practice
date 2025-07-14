type Users = Record<string , {age : number , name : string}>;
const users : Users = {
    "ashyam" : {age : 22 , name : "ashyam"} ,
    "malik" : {age : 22 , name : "Malik"},
}

const ans2 = users["ashyam"].age;
console.log(ans2);

type User4 = {
    age : number , 
    name : string ,
    tech : string
}

const users2 = new Map<string , User4 >();
users2.set("one" , {age : 22 , name : "Ashyam" , tech : "FullStack"});
users2.set("two" , {age : 23 , name : "Malik" , tech : "Blockchain"});

const user3 = users2.get('one');
console.log(user3);