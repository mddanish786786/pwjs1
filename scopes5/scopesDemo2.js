var teacher = "sanket singh";

function fun(){
    var teacher = "Anurag"
    console.log("hello", teacher);
}

function gun(){
    var student = "karthik";
    console.log("welcome to the class", student, "teacher for your class is", teacher); // here value for the variable teacher will be fetched from global variable that is "Sanket singh"
}
fun();
gun();