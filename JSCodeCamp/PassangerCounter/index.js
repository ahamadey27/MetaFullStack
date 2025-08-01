
// Get the element that displays the count
let countEl = document.getElementById("count-el");  
console.log(countEl);
// Initialize the count variable
let count = 0;
// Function to increment the count and update the display
function increment()
{
    count++;
    countEl.innerText = count;
    console.log(count);
}

function save()
{
    console.log(count);
}
 


