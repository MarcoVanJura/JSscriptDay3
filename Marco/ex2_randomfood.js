// Create an array named favoriteFoods which contains the food items like "pizza", “hamburger”, "ice cream", “chocolate”. Write a function named randomFood. The function should be able to choose and return randomly a favorite food in your favoriteFoods array.

let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"]

function randomFood(favoriteFoods) {
    return favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)]
}
console.log(randomFood(favoriteFoods))


// Exercise 3

// Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location, and job title. Once the user passes the four arguments the program should output the following message on screen:

// You will be a job_title in location and married to partners_name with number_childrens.

crystalGazer(3, "Bushra", "Vienna", "It-Expert")

function crystalGazer(number_children, partners_name, location, jobtitle) {
    console.log(`You will be a ${jobtitle} in ${location} and married to ${partners_name} with ${number_children}.`)
}

// Exercise 4

// ex 4 | Age Calculator
// Write a function called ageCalculator() that takes two arguments: birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

// You should get the following results:

// You are either 29 or 28

// let year = new Date().getFullYear();
// let myAge = ageCalculator(year, 1988)

// function ageCalculator(currentYear, yearOfBirth) {
//     return currentYear - yearOfBirth;

// }

// console.log(myAge)


let year = new Date().getFullYear();
let myAge = ageCalculator(2022, 1988)

function ageCalculator(currentYear, yearOfBirth) {
    return currentYear - yearOfBirth;

}

console.log(myAge)

// ex 5 | Age Calculator-improved
// Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. Provide the same results just by  passing one argument.

// You should get the following results:

// You are either 29 or 28

// ex 6 | Degree-Radian Conversion
// Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

// E.g. If user passes 90 degrees it should get the result of 1.57079 radians

let degree = 90
radian(degree)

function radian(degree) {
    console.log(degree * (Math.PI / 180))
}

// ex 7 | Area and Volume of a box
// Create a function that calculates the area and volume of a box.

// Formulas:

// area = width x height

// volume = width x height x depth

// Pass three different numbers as arguments and get calculated results using the return statement.

// You should get the following results:

// The area of the box is: 14

// The volume of the box is: 70

let result = calcArea(2, 5, 10)

function calcArea(width, height, depth) {
    let area = width * height
    let volume = width * height * depth;
    return `Area: ${area}, Volume: ${volume}`
}
console.log(result)