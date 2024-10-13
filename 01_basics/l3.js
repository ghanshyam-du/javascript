/*
L3- Data type converstion
 */
let score = "33ab"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log( valueInNumber)

//"33" => 33
//"33ab" => NaN means not a number
// true => 1, false => 0

let isLoggedIn = "ghanshyam"
let isboolean = Boolean(isLoggedIn)
console.log(isboolean)

// "" => false
//"ghanshyam" => true

let sumeNumber = 33
let stringNumber = String (sumeNumber)
console.log(typeof stringNumber)
