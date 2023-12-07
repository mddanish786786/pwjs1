/*
truty nd flsy values

*truthy values
the values which gives truth as required

*Falsy Values
these are the only are falsy values as

false
0
null
NaN
Undefined
""

*/

//login system

let email = "danish@gmail.com"

//if email is present ask for password oterwise ask for email

if (email== "danish@gmail.com"){
console.log("please enter your password");
}else{
    console.log("please enter your email");
}

//or
if (email!= ""){
    console.log("please enter your password");
}else {
    console.log("please enter your email");
}

//or

if (email){
    console.log("plese enter your password");
}else {
    console.log("please enter your email");
}

//if user provides email, password allow login elase ask for it
const email2 = ""
const password = ""

if (email2){
    if(password){
console.log("allow login")
    }else {
console.log("please enter your password")
    }
}else {
console.log(" please enter an email")
}
//logical operators
if (email2 && password){
console.log(" allow login");
}else {
console.log("please enter email and password");
}

//allow user to signin with google and github
const googleLoginToken = ""
const githubLoginToken = ""

if (googleLoginToken||githubLoginToken){
    console.log("welcome to the app");
}else{
    console.log("please login to view your account");
}

//
let age = 19
if (age>= 18){
    console.log("you get the driving licence");
}else {
    console.log("you are not eligible for driving licence");
}
//or
let age2 = 19
const willYouGetDrivingLicence = false
if (age2>= 18){
    console.log("you get the driving licence");
    willYouGetDrivingLicence = true
}else {
    console.log("you are not eligible for driving licence");
    willYouGetDrivingLicence = false
}

//by using ternary operator
const variableName = age>=18 ? "true part" : "false part"

//eg
let age3 = 19
const willYouGetDrivingLicence2 = false

(age3>=18) ? willYouGetDrivingLicence2 = true : willYouGetDrivingLicence2 = false

// return type

let loading = false

if (loading){
    return "loading..."
}
console.log("show the cards to user");

//by ternary operator
loading ? "show loading spinner" : "show card to user"