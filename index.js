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

//ARRAY METHODS //creates a new array by applying a function to each element
let Numbers = [1,2,3]
let squares = Numbers.map(num => num*num)
console.log(squares)







































