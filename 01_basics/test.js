/*
Lecture- 1
*/
// const accountId = 144553
// let accountEmail = "ghanshyamdu@gmail.com"
// var accountPassword = "12345"
// accountCity = "Mundra"
// let accountState; // it is undefine 

// accountId = 2 changing the things which is decleared by the const will not allowed to change. It will throw the error.
// accountEmail = "12alhae@gmail.com"
// accountPassword = "21212121"
// accountCity = "jaypur"

// console.log(accountId);
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
VAR :- variable decliared with var are function-scoped or globally-scoped, but not blocked scoped 
       * reassignment is possible and redefinition is also possible 
*/


/*
LET :- used to declare variables that are block-scoped, meaning they are only accessible 
       within the block in which they are defined.
       *block-scope refers to any code block defined by curly braces {}.
       *reassignment is possible but redefinition is not possible
*/
// EXAMPLE----

// let a = 5
// if(true){
//     let y = 6
//     console.log(a)  // output will be 5
//     console.log(y) // output will be 6
// }
// console.log(a)   // output will be 5
// console.log(y)   // output will be (y is not defined)




/*
CONST :- constants are variables whose values cannot be reassigned once they are initiallized.
           * it cannot be changed or reassigned throughout the execution of the script
*/

// ----------------------------------------------------
