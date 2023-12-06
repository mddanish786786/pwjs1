/*switch(expression){
    case value 1:
        statement 1;
        statement2;
        break;
    case value 2:  
        statement 3;
        statement 4;
        break;
        .
        .
        .
        .
        and so on
    default:
        statement

}*/

let getStarFromUser = "5"
let starInNumber = parseInt(getStarFromUser)

switch (starInNumber){
    case 1:
        console.log("poor");
        break;
    case 2:
        console.log("emm, ok");
        break;
    case 3:
        console.log("average");
        break;
    case 4:
        console.log("cool");
        break;
    case 5:
        console.log("great");
        break;
    case 6:
        console.log("awesome");
        break;
    case 7:
        console.log("you nailed it !!!");
        break;
    default:
        console.log("i dont know what star rating is this for")

}
