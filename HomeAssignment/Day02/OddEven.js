/*Assignment Details:
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.
Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result*/

//Function to find given number is even or odd using Javascript
function isOddOrEven(integer)
{
    if (integer<=0 || integer==null || integer==undefined)
         console.log(`Given number ${integer} is invalid. Pass valid number`)
    else if(integer%2==0)
        console.log(`Given number ${integer} is Even`)
    else
        console.log(`Given number ${integer} is Odd`) 
}

//Testcase 1: Check for Even Number
isOddOrEven(14)

//Testcase 2: Check for Odd Number
isOddOrEven(9)

//Testcase 3: Check when integer is Zero
isOddOrEven(0)

//Testcase 4: Check when integer is negative 
isOddOrEven(-6)

//Testcase 5 : Check when integer is undefined
var value
isOddOrEven(value)

//TestCase 6: Check when integer is null
isOddOrEven(null)