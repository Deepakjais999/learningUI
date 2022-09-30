function showValue() {
    const a1 = 10;
    console.log("Inside function " + a1);

    // Multiple assignments not allowed
     a1 = 11;
}

console.log("Outside function " + a1);

showValue();