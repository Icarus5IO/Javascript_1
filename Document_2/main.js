// Continued control flow discussion from previous document

// Switch case
// states what day of the week it is starting with sunday being 0 index
let day = new Date().getDay();

// states full date and converts to string
let literal_day = new Date().toString();

console.log(day)
console.log(literal_day)

// code above will dictate what result is spat out
// code goes by current day of the week starting with a 0 index
// Switch Case Statement Syntax
switch(day){
    case 0:
        console.log('Go to church');
        break;
    case 1:
        console.log("Write code... it's Monday!!")
        break;
    case 2:
        console.log("Test code... it's Tuesday")
        break;
    case 3:
        console.log("It's Wednesday my dudes")
        break
    case 4:
        console.log("Write a feature for project on Thurs")
        break;
    case 5:
        console.log("Testing Feature on Friday")
        break;
    case 6:
        console.log("Rest on saturday")
        break;
    default:
        console.log("We don't have a case to handle that")
}

// creation of objects in JavaScript
// a simple js object
let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}

// Accessing data in our object
console.log(person['name']) // Bracket notation
console.log(person.fav_color) // Dot notation

// Complex JavaScript Object
let person2 = {
    name: "Max",
    age: 31,
    prog_languages: ['JaveScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
}

console.log(person2.prog_languages[2]);
console.log(person2['prog_languages'][2][0])
console.log(person2.teams[1].soccer[0])

// -- JavaScript Object Prototype Methods -- Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Sad path of looping through objects in JS
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

console.log('---SPACER---')
// Happy path of looking through objects in JS -- Looking for keys
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

console.log('---SPACER---')
// List Values from the person2 Object that are arrays
for(let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

// Create our own own object prototypes -- usin ESS method syntax
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A method inside JS prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}, and has ${wheels} and the color ${color}`);
        return 'Returned Value'
    }
}

// creating an inistance of a prototype
// make sure to add new?
let my_car = new Car('Honda', 'CRV-V', 2019)

// call the prototype menthod
console.log(my_car.printInfo(4, 'Gun Metal'))


// JavaScript Classes
// built atop prototypes

class Human{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printInfo(){
        return `Name; ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let wilma = new Human('Wilma', 25, 'Female');

// Use printInfo from our newly instantiated wilma (Human) class
console.log(wilma.printInfo())

// JavaScript Inheritance using classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabyWalking() {
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby is not walking yet'
        }
    }
}

// Create an instantiated value for baby
let caleb = new Baby('Celeb', 1, 'Male', true)
console.log(caleb.printInfo())
console.log(caleb.isBabyWalking())

// JavScript closures

// A closure is a self invoking function that only runs once
// One of the most important parts is that it has data inside of it.

// Closures are also variable data type.

var outsideNum = 5

var addNums = function(){
    var insideNum = 6;
    return outsideNum + insideNum;
};

console.dir(addNums)

let newAdd = function(outer_var){

    let innerAdd = function(inner_var){
        return outer_var + inner_var;
    };
    return innerAdd
};

let addFive = new newAdd(5);
let addSix = new newAdd(6)

console.log(addFive(3))
console.dir(addSix)

let count_up = ( function() {
    let counter = 0; // this will be our privat variable
    console.log('Hit');
    return function() { return counter ++}
}) ()

console.log(count_up())
console.log(count_up())

let addNames = ( function() {
    let names = []; //This is the privete variable stored
    console.log('Adding names')
    return function (name){
        console.log(names)
        return names.push(name)
    }
})()

console.log(addNames('Edgar'))
console.log(addNames('Noah'))
console.dir(addNames)
console.log(addNames('Marcos'))
console.log(addNames('Monse'))


// Async JavaScript section //

// -- JavaScript callbacks -- //

/*
    Simply put: A callback is a function that is to be executed after another
    function has finished its execution = hence the name callback

    More complex definition : In JavaScript, functions are objects. Because of this,
    Functions can take other functions as arguements(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as anargument is called a "Callback function".

    SOOOO.... why do we need them?

    The reason for this is, because of the JavaScript event Loop. In a nutshell,
    JavaScript is an event driven language so this means, that instead of waiting for
    a responce before moving on, JS will keep executing while listening for other events.

*/

// Basic example 

function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()
second()

// But what if we delay the execution?

function first_delay(){
    // Simulate the delay
    setTimeout(function(){
        console.log(1)
    },5000)
}

function second_delay(){
    console.log(2)
}

first_delay()
second_delay()

// Callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`);
    callback
}

// doHomework('JavaScript', function() {
//     console.log('Done with homework')
// })

/*
    Though calllbacks give us more functionality... they also introduce
    their own problems: Callback Hell

    Something that looks like this:
    function 1() => {
        function 2() =>{
            function 3() =>{
                function 4() =>{
                    // Maybe do something :/
                }
            }
        }
    }
*/

console.log('----Spacer---')

const isEvenNumber = (num) =>{
    return new Promise( (resolve, reject) =>{
        if(num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using the JS Promise
isEvenNumber(10)
// Happy path (Resolve)
.then( (result) => {
    console.log(`Even number ${result}`)
})

// sad reject path
.catch( (error) => {
    console.log(`Odd number ${error}`)
})

// Another example with promises - using Async/Await
function increase_salary(base, increase) {
    const new_salary = base + increase;
    console.log('New Salary: ${new_salary}');
    return new_salary;
}

// function to add to the base salary slowly
function slow_addition(n1, n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New salary ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}

async_increase_salary(50000, 5000)