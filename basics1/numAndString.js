
//String

const firstName = 'hello'
const lastName = "HC"

console.log(firstName + '  ' + lastName);
console.log(`my firstname is ${firstName} and my lastname is ${lastName}`)

const userName = new String('danish')
console.log(userName[0]);
console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.substring(0, 3));

let email = "d@hc.com  "
console.log(email.trim());

let emailTwo = "hc@pw.live"
console.log(emailTwo.replace('hc', 'da'));
console.log(email.includes('hc'));
console.log(emailTwo.toUpperCase());

//Number

const num = new Number (5)
console.log(num.toString());
console.log(num.toFixed(2));

const subscribers = 100000
console.log(subscribers.toLocaleString());
console.log(Number.MAX_VALUE);

console.log(Math);
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));