"use strict";
;
;
let user = {
    name: "Ashyam",
    age: 17,
    address: {
        city: "Chandigarh",
        country: "India",
        pincode: 143001,
        houseNumber: 501,
    }
};
function isLegal(user) {
    return user.age >= 18;
}
const ans = isLegal(user);
if (ans) {
    console.log("He is Legal");
}
else {
    console.log("He is not legal");
}
