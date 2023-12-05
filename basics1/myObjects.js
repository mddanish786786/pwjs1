const user={
    username: "HC",
    "first Name": "sir",
    name: "hitesh",
    email: "h@hc.com",
    age: 20,
    isAdmin: false,
    isLoggedIn: true,
    tea: ["leamon", "peach", "ginger"],
    address: {
        city: "jaipur",
        state: "rajasthan"
    }

}
//adding another copy user 
const anotheruser = user
console.log(anotheruser);

//Accessing the data 
console.log(user.age);
console.log(user['age']); //we can access by both way

console.log(user.tea[1]);
console.log(user.address.state);
console.log(user["address"]["state"]);

//updating the data
user.email = "hitesh@pwskills.com"
console.log(user);

//deletion of data
delete user.isAdmin
console.log(user);

/*tricky questions for the interview

The first name or anything is written as
eg. firstName: "hitesh"
But i want username as 
eg. first Name: "hitesh"
So we will wrap it up as
eg. "first Name": "hitesh"
*/
// we will access the same data as
console.log(user["first Name"]); //ere dot notations will not be used, if used it will automatically convert it to required the same.

//to get userList form the data base
const userListFromDatabase = [{},{},{}]

//to get keys of the data 
//console.log(user.keys()); //this will not give result its wrong way
console.log(Object.keys(user)); // this will give result its a rigt way

// to get values of data
console.log(Object.values(user));

//to get entities 
console.log(Object.entries(user));

//to check the asking element is available in the data or not
console.log(user.hasOwnProperty('book'));
console.log(user.hasOwnProperty('tea'));