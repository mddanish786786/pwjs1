//Even in the global scope TDZ still exists


console.log(y);  // TDZ
    let y = 10; // global scope
    console.log(y);