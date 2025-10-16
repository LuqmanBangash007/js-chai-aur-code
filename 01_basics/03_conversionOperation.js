let score = "33abc"

console.log(typeof score) // By this way we know about the type. Lets say if let score = "33abc", In this case it will give string.
console.log(typeof(score))  // we can also use method () to get the type.

let valueInNumber = Number(score) // Here Number is constructer function. First character of Constructer function is always Capital 
console.log(typeof valueInNumber)
console.log(valueInNumber) // In this case Nan will be the output and NaN is also a special type; you can check whether a value is NaN (i.e., whether it resulted in NaN).e

/* Key Points 

"33" => 33
"33abc" =>  Nan
"true" => 1
"false" => 0

*/

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)
console.log(typeof booleanisLoggedIn)

/*
1 => true 
0 =>false
"" => false
"luqman" => true
*/ 


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



