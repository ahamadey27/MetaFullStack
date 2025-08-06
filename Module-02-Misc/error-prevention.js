function addTwoNums(a,b) {
    try {
        if((typeof(a) != 'number') || (typeof(b) != 'number')) {
            throw new ReferenceError("One argument is not a number")
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(6, "5")
console.log("It still works")