function addNumbers(){
    //no parameters passed in the function
    let result = 0;
    for (let i=0; i<arguments.length; i++){
        // i donates index of array 0-based
        result += arguments[i];
    } return result;
}
// variable arguments
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(5, 7));
console.log(addNumbers(5));
