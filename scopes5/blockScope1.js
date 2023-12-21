function fun(){
    console.log(x);  //TDZ for x
    var x = 10;
    console.log(x);
}

if (true){
    console.log(y);  //TDZ for y
    let y = 10;
    console.log(y);
}
//fun();