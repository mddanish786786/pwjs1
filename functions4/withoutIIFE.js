function downloadScript(){
    //this was an old function

    console.log("old function implemented here");
}

// more code 8000 lines
downloadScript();
//somewhere between

// intern by mistake makes the same function 
function downloadScript(){
    console.log("new function is created");
}
console.log("calling intern code");
downloadScript();