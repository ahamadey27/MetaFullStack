function fib(n) {
    // Step 1: Define the base case(s) here.
    if (n === 0) 
    {
    return 0;
    }

    if (n === 1 || n === 2){
        return 1;
    }
    
    // Step 2: Define the recursive case here.
    return fib(n - 1) + fib(n - 2); // Recursive case
}

console.log(fib(10));

