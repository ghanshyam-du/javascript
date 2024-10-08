/*
Lecture- 1
*/
const accountId = 144553
let accountEmail = "ghanshyamdu@gmail.com"
var accountPassword = "12345"
accountCity = "Mundra"
let accountState; // it is undefine 

// accountId = 2 changing the things which is decleared by the const will not allowed to change. It will throw the error.
accountEmail = "12alhae@gmail.com"
accountPassword = "21212121"
accountCity = "jaypur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

// ----------------------------------------------------
