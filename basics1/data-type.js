// primitive (STACK)
/*
string
number
boolean
null
undefined
symbol
bigInt 
*/

const firstName="Danish"
const age = 30
const score = 200
let isLoggedIn = true
const nodeVersion = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aReallyLongNymber = 12223334545565n

// reference(non-premitive)-objects (HEAP)
/*

Array
Objects
Functions
*/
//array
const numbers=[1,2,3,4,5,6,7,8]
const heroes = ["superman", "batman", "flash"]

//object
const userObject = {
    name: "danish",
    age: 30,
    isLoggedIn: true
}

//functions

const sayello = function(){
console.log("danish")
}
const resgisterAUser = function(){}
const logInUser = function(){}
