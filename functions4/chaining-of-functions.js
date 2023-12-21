const obj  = {
  func1: function f(x){
    console.log("f called");
    return {
        func2: function g(){
            console.log("g called");
        }
    };
  }
}

obj.func1(10).func2();
//console.log("hello"), math.sqrt(100)