function downloadScript(){
    //this was an old function

    console.log("old function implemented here");
}

// more code 8000 lines
downloadScript();
//somewhere between

// intern by mistake makes the same function now we can change the name of function and
//to solve this, we can wrap the whole intern's code that can break, into an IIFE
(function (){
    function downloadScriptFromIdeonAndPopulatedDatabase(){
        console.log("new function is created");
    }
    console.log("calling intern code");
    downloadScriptFromIdeonAndPopulatedDatabase();
})();

downloadScriptFromIdeonAndPopulatedDatabase();