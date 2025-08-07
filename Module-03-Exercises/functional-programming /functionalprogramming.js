// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    var message = "%c" + txt;

    
    // Declare a variable for the style
    var style = `color: ${color};`
    
    // Append background style to the style variable
    style += `background: ${background};`;
    
    // Append font size style to the style variable
    style += `font-size: ${fontSize};`;
    
    // Log the message with the applied style
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    // WRITE YOUR CODE HERE
    
    // Check if the reason is "birthday"
    // WRITE YOUR CODE HERE
    
    // If reason is "champions", log a congrats message
    // WRITE YOUR CODE HERE
    
    // For any other reason, log a default message
    // WRITE YOUR CODE HERE
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE

// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    // WRITE YOUR CODE HERE
    
    // Call celebrateStyler with the last argument
    // WRITE YOUR CODE HERE
}

// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE