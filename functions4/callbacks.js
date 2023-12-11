/** 

* do you remember we discussed that functions are first class citizen?

* that claimed that we can pass function as an argument

*/

/**
 * Array -> list of numbers that we will get
 * fb -> is a function passed as an argument to the processArray function
 */

function processArray(array, fn){

    for( let i = 0; i<array.length; i++){ // iterating over every index of the array
        console.log("index", i, "value", array[i], "return value of fn", fn(array[i]));
        // i -> index, array[i] => value at the ith index, fn(array[i])-> it will pass array[i] as argument to fn
        // fn(array[i]) ->
        //    1. we are calling fn
        //     2. Arguments passed to call fn is array[i]
        //    3. fn represents the function passed as gthe argument to processArray
    }
}

processArray([2,3,4,1,5], function cube (x){return x*x*x}); // passing funsction as an argument, fn -> cube

processArray([2, 3, 4, 1, 5], function square(x){return x*x});
