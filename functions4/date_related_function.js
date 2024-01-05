const d = Date();
//The date function returns a new string which has date data
console.log(d);

const dt = new Date(); //to get a date object we do new Date() , this returns a special object having date related properties
console.log(dt);

console.log(dt.getDate);
console.log(dt.getMonth);
console.log(dt.getUTCFullYear);
console.log(dt.getHours);
console.log(dt.getMinutes);
console.log(dt.getSeconds);
