var teacher = "sanket singh"; // knows to js in global scope

function fun(){  //knows to js in global scope
    var teacher = "Anurag"  //known to js in fun scope
    content = "js";
    console.log("hello", teacher);
}

function gun(){  //known to js in global scope
    var student = "karthik";  //known to js in gun scope
    console.log("welcome to the class", student, "teacher for your class is", teacher);
}

console.log(teacher, content); // Sanket singh,  no auto global promotion here

fun();
gun();
console.log(teacher, content);