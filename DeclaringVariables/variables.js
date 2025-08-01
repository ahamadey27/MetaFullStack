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