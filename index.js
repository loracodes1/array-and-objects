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







































