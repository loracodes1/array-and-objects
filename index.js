let fruits =["apples", "pineapples" , "watermelon" , "cherry"] //literal notation

let numbers = new Array (1,30,18,67,9)

//ACCESSING ELEMENTS IN AN ARRAY, WE USE INDEX WHICH STARTS FROM 0
console.log(fruits[0]) //it will output apples
console.log(numbers[2]) //it will output 18

//modifying eleemnts in an array
fruits[1]="blueberry" // changes the fruit in the second position which is index 1 to blueberry
console.log(fruits) // the output will be [ 'apples', 'blueberry', 'watermelon', 'cherry' ]

fruits.push("orange") // this will add "orange" at the end
console.log(fruits) // the output will be[ 'apples', 'blueberry', 'watermelon', 'cherry', 'orange' ]

fruits.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(fruits)

fruits.unshift("grapes") //adds a new element at the start of the array
console.log(fruits)

fruits.shift() //removes the first element
console.log(fruits)

//ARRAY METHODS 

//.map()
//creates a new array by applying a function to each element
let Numbers = [1,2,3,6]
let squares = Numbers.map(num => num*num)
console.log(squares)

//.filter()
let evenNumbers = Numbers.filter(num =>num%2 ===0)
console.log(evenNumbers)

// .reduce()
// The .reduce() method in JavaScript is a powerful array method used to process each element in an array and “reduce” it to a single cumulative value. Unlike .map() or .filter(), which return a new array, .reduce() returns a single value based on the logic in the function you provid
// examples of .reduce() in action

//1.summing up all elements in an array 
const numberS = [1, 2, 3, 4, 5];

const sum = numberS.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

//2.Finding the maximum number in an array
const NUMBERS = [1, 3, 7, 2, 5];

const max = NUMBERS.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, NUMBERS[0]);

console.log(max); // Output: 7

//3.Counting Occurrences of Values

const fruitS = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCounts = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});

console.log(fruitCounts); 
// Output: { apple: 3, banana: 2, orange: 1 }

//EXPLANATION
// accumulator starts as an empty object {}.
// Each fruit name is checked in accumulator.
// If it exists, it’s incremented by 1.
// If it doesn’t exist, it’s set to 1.
// The final object has counts of each fruit.

//4.flattening an array of arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(flatArray); 
// Output: [1, 2, 3, 4, 5, 6]

//.forEach()
numbers.forEach(num => console.log(num));

//.find() array method 
let firstEven = numbers.find(num => num % 2 ===0)
console.log(firstEven)

// OBJECTS
//CREATING OBJECTS USING {} (CURLY BRACES)
let person ={
    name:"Florence",
    age:21,
    isStudent: true,
    residence: "Meru town"
}
console.log(person)
console.log(person.name)

//CREATING AN OBJECT USING THE new object() constructor
let car = new Object();
car.brand = "Toyota"
car.year = 2020
car.model = "TX Prado"
console.log(car)
console.log(car.brand)

car.brand = "Levorg"
delete car.model 


// Accessing and Modifying Object Properties
// You can access properties using dot notation or bracket notation
console.log(person.name);
console.log(person["age"])

//modifying object properties
person.age = 31; // Update property
person.city = "New York"; // Add new property
delete person.isStudent; // Remove property

console.log(person)
console.log(car)

//NESTING OBJECTS AND ARRAYS IN OBJECTS
let student = {
    name: "Bob",
    courses: ["Math", "Science"],
    address: {
        street: "123 Main St",
        city: "Metropolis"
    }
};

console.log(student.address.city); // Output: "Metropolis"

//OBJECT METHODS
let keys = Object.keys(person)
console.log(keys)

let values = Object.values(person)
console.log(values)

let entries = Object.entries(person)
console.log(entries)

//ARRAY OF OBJECTS
let students = [
    { name: "Alice", age: 25, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 23, grade: "A" }
];

// Accessing an object within an array
console.log(students[1].name); // Output: "Bob"

// Using .filter() to find students with grade "A"
let topStudents = students.filter(student => student.grade === "A");
console.log(topStudents); // [{ name: "Alice", ... }, { name: "Charlie", ... }]












































