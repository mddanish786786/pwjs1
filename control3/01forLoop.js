/* for(initial expression or declaration; condition; changer or increment/decrement){
    //body
}*/

for( let index = 0; index<Array.length; index++){
    const element = Array[index]
}
//eg.

let userScore = 1
const heighestValue = 10

for(userScore; userScore <= heighestValue; userScore = userScore +1){
    console.log('userScore is $ {userScore}');
}

//eg.
let userScore2 = 10
const minValue = 0

for(userScore2; userScore2>=minValue; userScore2 = userScore2-1){
    console.log('userScore is $ {userScore2}');

    //if score hits 5, dont print anything after that
    if (userScore2 == 5){
        break;
    }
    // if don't want to print 5 then we will take userScore2 == 5 as userScore>5 in this case
}

// if score hits 5 skip printing 5 but print rest values
let userScore3 = 10
const minValue2 =0

for(userScore3; userScore3>=minValue2; userScore3 = userScore3-1){
    if (userScore3 == 5){
        continue
    }
    console.log("userScore is $ {userScore3}");
}