let i = 0;

do {
    console.log(i);
    i++;
} while (i<10);


//break and continue
for (let i = 0; i < 10; i++){
    if (i === 5) {
        console.log("Five");
        continue;
    }
    console.log(i);
}


//function
function mySelf(name){
    console.log("My Name is Jacob Okpara.");
}
    //function with parameters
function mySelf(name){
    console.log("My Name is", name);
}
mySelf("Jacob Okpara");
mySelf("Sony Okpara");
mySelf("Lina Okpara");
mySelf("Eunice Okpara");

function add(x,y){
    let sum = x + y;
    console.log (sum);
}
add(5,6,);
add(6,7);
add(7,8,);


function multiplication(Z, Y){
    let sum = Z * Y;
    console.log(sum);

}
multiplication( 2,6);
multiplication( 6,7);
multiplication( 10,4);
multiplication( 10,8);
multiplication( 10,14);


// function with return value

function multiplication(n, l){
    let sum = n * l;
    return sum; 
}

let result = add(25,20);
let newResult = result * 2;
console.log(newResult);


// // arrow function
let divide = (a,b) => a / b;
let multiply = (a,b) => {
    let sum = a * b;
    return sum;
}
console.log(divide(10,5));
console.log(multiply (10,5));


// Higher order function
// is a function that  function as a parameter
let numbers = [0,1,2,3,4,5,6,7,8,9];
let squares = numbers.map(( number) => number * number);
console.log(squares);
let num = [0,1,2,3,4,5,6,7,8,9];
let doubles = num.map(( num) => num + num);
console.log(doubles);


let evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);
let odd = numbers.filter((number) => number % 2 !== 0);
console.log(odd);


let five = numbers.find(num => num === 5);
console.log(five);


// string
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));

console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("lazy"));
console.log(sentence.indexOf("jump"));
console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padStart(10));
console.log(sentence.padEnd(10));
console.log(sentence.repeat(2));
console.log(sentence.replace("lazy","hardworking"));
console.log(sentence.slice(20, 30));
console.log(sentence.substring( 20, 30));
let email ="kofi@gmail.com";
console.log(email.split("@"));
console.log(sentence.split(" "));
console.log(sentence.toLocaleUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.trim());
console.log(sentence.trimEnd());
console.log(sentence.trimStart());



