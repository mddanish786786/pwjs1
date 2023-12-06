//if statement
let teampreature = 16

if (teampreature<20){

     // body- executable code
    console.log("it's really cold")
}
console.log("it's really hot")

// if-else statemet
let teampreature2 = 16

if (teampreature2<20){
    
     // body- executable code
    console.log("it's really cold")
} else{

    console.log("it's really hot")
}
console.log("PW Skills")

//practice
let score = 110
let life = 3
let bullets = 1000

console.log("welcome to the PW game")
if (score>99){
    console.log("you gained a life");
    score = score-100
    life = life+1
    let bullets =200
    console.log("your bullets are ${bullets}");

} else {
    console.log("you dont get a life");
}
console.log('your score is ${score} and my life is ${life} and bullets are ${bullets}');