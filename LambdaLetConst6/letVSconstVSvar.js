/**
 * The major difference the let and var exist around the Scoping mechanism
 //Let and const support block scope if block scope not present then global scope
 //var support function scope, and if function scope not present then global scope
 //let and const support TDZ
 //var dosen't support TDZ
 


 * Difference between let and const 
 //Reassignment 
 //variables declared with let are reassignable
 //const on the other hand is not
 */

 function letReassignment(){
    let x = 10;
    console.log(x);
    x = "Sanket";
    console.log(x);
 }
 function constReassignment(){
    const x = 10;
    console.log(x); //print x
    x = "Sanket"; //because x is const Reassignment is not possible // throws error
    console.log(x);
 }
 function constReassignmentWithObjects(){
    const obj = {x:10, y:20};
    console.log(obj);
    obj = {a:5}; //Reassignment to a brandnew object //throw an error
 }

constReassignment();

function constUpdationgValue(){
    const o = {x:100, y:0};
    o.x = 90; //this don't throw an error
    o.z = 99;
}
constUpdationgValue();