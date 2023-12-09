const isEvenOrOdd = function (num){
    return num%2 ==0;
}

// is this a anonymous function expression?
//Yes

//how to call it?
//you can use the name of the variable inside which you have stored the function to call it.

const result = isEvenOrOdd(50);
console.log(result);

//Q: if name is not important then why we are using different named and anonymous function expression?

//A: because of these reasons: 1) debugging, 2) recursion, 3) readibility