var petDog = "Rex";
var petCat = "Pepper";

var catSound = "meow";

console.log(petCat + " says " + catSound);
console.log("My pet dog's name is " + petDog + ".");

var score = 8;
var midSkillBool = score > 0 && score < 10;
console.log("Mid-level skills: " + midSkillBool);

var timeRemaining = 0;
var energy = 10;
console.log("Game Over: " + (timeRemaining == 0 || energy == 0));

//New exercise
var num1 = 2;
var num2 = 5;

var test1 = num1 % 2;
var test2 = num2 % 2;

var result1 = (test1 == 0);
var result2 = (test2 == 0);

console.log(`Is ${num1} an even number? ${result1}`);
console.log(`Is ${num2} an even number? ${result2}`);

