// Basics of JavaScript

/*
    Primitive data types in JS: strings, integers, Booleans, floats,
     arrays, objects (very similar to python dictionaries)
    Functions in JS
    Loops
    Scripting vs Programming language
*/

// String variables

var first_name = 'Zack';

// Display value in JS
console.log(first_name)

// Assign an integer
var some_number = 32;
console.log(some_number)

// show all atributes of a document or id
console.dir(document)

// Floats
var some_float = 3.141592
console.log(some_float)

// Array
var some_array = [1,2,3,4]
console.log(some_array)

var some_object = {'Yee': 'haw'}
console.log(some_object)

// javascript hoisting (bad practice, show what data type your declaring)

a_num = 10
console.log(a_num)
var a_num
console.log(a_num)

console.log(some_random_variable) // still runs but returns undefined witch is basically a None type; not good practice
var some_random_variable = 'This is a random variable'
console.log(some_random_variable)

// A bettr way of declaring a variable is by using 'let' or 'const' keywords

let x = 5
console.log(x)
x = 3
console.log(x)

const y = 5;
console.log(y)
// y = 6;
// console.log(y)


// Video break 1__________________


// Basic math operatons

// Addition
let sum = 5 + 5
console.log(sum)

// Subtraction
let diff = 5 - 4

let diff_1 = 5
let diff_2 = 4
console.log(diff_1 - diff_2)

// Multiplication and division same as python, exponents as well

// Some other math operations
// Finding the floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)
// aleternatively, Math.ceil(n) brings back the ceiling

// Mind bender, adds 4 to the end of the some_float; concatonates as string
let crazy_stuff = some_float + '4'
console.log(crazy_stuff)

// Mind bender 2; parsefloat adds as if integer
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

// Redeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'Tommy'
console.log(red_ranger)

// Using the let keyword for the same
let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)

// Dont retype let on later variable changes

// Regular named functions; use {} in js instead of : like in python
function addNums() {
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums())

// note how camel phase (addNums) is used in js instead 
// of snake phase like in python (add_nums)
let addNums2 = function(num, num2){
    return num + num2
}

console.log(addNums2(6,7))

// ES6+ Arrow function in javascript
// Our firset example shows how to use a single paramiter in a 
// function without (). This can only be done with 1 paramiter
// if you dont want to use ()

let cubed = num=> {
    return num**3
}

// Empty arrow function, doesnt take information
let someFunction = () => {
    return 5
}

console.log(cubed(4))

// with parenthses
let cubed2 = (num)=> {
    return num**3
}

console.log(cubed2(4))

// If multiple paramters, must use ()

let toThePower = (num, power) => {
    return num ** power
}

console.log(toThePower(4,3))

console.log(
    (function(name){
    let hello = 'Hello' + name;
    return hello
})
('Joel'))
// console.log((function body)(parameter value))


// video break 2________________________________


// control flow
// if statemants
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(15))

// Terary Operators
function determineAge2(age){
    return (age < 18) ? 'minor' : (age >= 18 && age <65) ? "Adult not retired" : 'Eldery person not retired'
}

console.log(determineAge2(31))

// Loops
// start, stop, i++ is our step
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
}

console.log(countByOne())

// def count_by_one():
//     for i in Range(0, 20, 1):
//         print(i)
//     return 'Counting has stopped'

function decreaseByOne(){
    for (let i = 28; i > 0; i--){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(decreaseByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is... ${i} \n`
        i++;
    };
    return text;
}

console.log(count_with_while())

//  Do while loop
//  do while will run at least once even if false
//  ex. change while to i > 10
function counWhithDoWhile(){
    let i = 0;
    let text = '';

    do{
        text += `this number is... ${i} \n`;
        i++;
    }

    while(i < 10);
    return text;
}

// Do while will run at least one time

console.log(counWhithDoWhile())

// create array
let group_of_names = ['jerry', 'ben', 'bAsh', 'Brock', 'Misty']

// index the first position
console.log(group_of_names[0])


// berry, ben, and misty will be the variable in witch we can pull our original list of names,
// indexed in the same order as dictated below
let jerry, ben, misty;
[jerry, misty, ben] = group_of_names
console.log(jerry, ben, misty)
console.log(group_of_names)
console.log(ben)

//  Method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[1]);
    }
    return 'done'
}

console.log(showAllNames())

// Method 2
console.log(group_of_names.forEach(element => console.log(element)))

// JS Array method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

// More methods: map, filter, reduce

// .map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})

console.log(b_names)

//  Long form of .map
let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()
// includes anything above 4 characters
let long_names = group_of_names.filter( element => element.length > 4)
console.log(long_names)

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})

console.log(nums_reduced)

// You can aslo use methods like .join, .slice, .search, .splice


// video break 3________________________________

