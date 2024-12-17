/*
Assignment Details:
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.
Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.
*/

function guessNumberType(number)
{
    const result = number > 0 ? "Positive" : number < 0 ? "Negative": "Zero"  ;
    return result;
}

//Testcase 1: Given number is Positive Number
console.log(`Given Number is ${guessNumberType(10)}`)

//Testcase 1: Given number is Negative Number
console.log(`Given Number is ${guessNumberType(-22)}`)

//Testcase 1: Given number is Zero
console.log(`Given Number is ${guessNumberType(0)}`)
