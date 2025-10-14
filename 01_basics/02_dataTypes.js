
/* alert ( 3 + 3)This alert (3+3) will throw an error. We are using nodejs, not browser so it will thorw error. This will work in browser in console and output will be 6 */


/* 
There are diff types of data type
1) String: let name = "luqman" (This is string data type. We can use "" or ''for string)
2) Number: let age = 25 (This is number data type. We dont use "" for numbers)
3)Boolean: let isLoggedIn = true  (This is boolean data type. There are only true or false for this data type)
4)null => When we intentionally leave a variable empty or don't assign any value to it, it becomes null. Iska matlb k hm jan boj kr empty value assign krty ha.Variable 
explicitly set to "no value."
5)undefined => undefined ka matlab hai ke variable ko declare kiya gaya hai, lekin usme abhi tak koi value assign nahi ki gayi.Variable declared, but no value assigned.

    Note: These are non primitive data types

*/


let name = "luqman" // this is string data type. We have to use "" for string
let age = 25 // this is number data type. We dont use "" for numbers
let isLoggedIn = true // this is boolean data type. there are only true or false for this data type


console.log(typeof "luqman") //typeof use krne se hme pata lagta ha k us value ki type kya ha. e.g is case me string dega
console.log(typeof undefined) // output: undefined. (undefined khud ek type ha JS me)
console.log(typeof null) // output: object


