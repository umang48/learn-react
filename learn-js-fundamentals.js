let yourname = "Umang"
console.log(yourname);

const greet = (myname) => { console.log("Hello ", myname)};
console.log(greet("Full Stack Developer"));

// array methods

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);   

const evennumbers = numbers.filter(num => num % 2 === 0);
console.log(evennumbers);

const largerthanthree = numbers.find(num => num > 3);
console.log(largerthanthree);
