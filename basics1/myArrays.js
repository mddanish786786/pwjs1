const myArray = [1,2,3,4,5]

const myNewArray = new Array(1,2,3,4,5)
console.log(myArray[1]);

const dcHeros = ["batman", "superman", "flash", false]
console.log(dcHeros.length);

//to add data in the array we can use
dcHeros[dcHeros.length]= "wonder woman" //or
dcHeros.push("wonder woman") //this one is a suitable coding technique for a progammer

console.log(dcHeros)

dcHeros.pop()  //to remove the last elemnt
const lastHero = dcHeros.pop()  //to save the workdone what last element have been removed
console.log(dcHeros);

dcHeros.unshift("aquaman")  //it will add an elemnt at the 0th position means start of the array and due to this all the existing array will shift to next position.
console.log(dcHeros);

console.log(myArray.toString());//to convert the values in String
console.log(dcHeros.toString()); 

//another way of doing the same above is 
console.log(dcHeros.join());  //it gives comma(,) between elements
console.log(dcHeros.join("-")); // it gives selected character like (-) between elements 

console.log(dcHeros.slice(1,3)); // in tnterview the question will arrise as whats the difference between slice and splice
console.log(dcHeros)
console.log(dcHeros.splice(1,3));
console.log(dcHeros)