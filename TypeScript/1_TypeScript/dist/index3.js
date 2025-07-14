"use strict";
const users = {
    "ashyam": { age: 22, name: "ashyam" },
    "malik": { age: 22, name: "Malik" },
};
const ans2 = users["ashyam"].age;
console.log(ans2);
const users2 = new Map();
users2.set("one", { age: 22, name: "Ashyam", tech: "FullStack" });
users2.set("two", { age: 23, name: "Malik", tech: "Blockchain" });
const user3 = users2.get('one');
console.log(user3);
