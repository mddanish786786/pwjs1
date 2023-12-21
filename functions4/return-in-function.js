/**
 * beacuse function is first class citizen so we can return a function too.
 */

function fun(){
    console.log("called the function fun");

    return function cleanUp(){
        console.log("cleaning up the resources");
    }
}
const result = fun();
console.log(result);
result();  // you call cleanup like this

/**
 * what is stored inside result ? -> it stores the function returned by fun i.e cleanup.
 */