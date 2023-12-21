// 1.

const arr = [1, 2, 3, 4, 5];

arr.forEach(function printer(value) {console.log("value is", value);});

/**
 * which one of the above function is a HOf? Ans: forEach
 * which one of the above function is a callback? Ans: printer
 */

// 2.

function exec(){
    console.log("timer done");
}
setTimeout(exec, 3000);

/**
 * which one of the above function is a HOf?  Ans: setTimeout
 * which one of the above function is a callback? Ans: exec
 */