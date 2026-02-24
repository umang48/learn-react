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


// object destructuring

const user = {name:"Umang", age:32, city:"Unjha"};
const {name, age, city} = user;
console.log(age)

// spread operator

const arr1 = [1, 2, 3];
const arr2 = [...arr1,4,5,6];
console.log(arr2);

const obj1 = {a:1,b:2};
const obj2 = {...obj1, c:3};
console.log(obj2);


// promises and async/await api calls

const fetchData = async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}

console.log(fetchData());
