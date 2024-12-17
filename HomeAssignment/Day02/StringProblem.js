/*Assignment Details:
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
palindrome, then test your function with various strings and print the results.
Assignment Requirements:
Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false.*/


//Function to find the given string is palindrome
function isPalindrome(originalString)
{
    let reverseString = "";
    for(i=originalString.length-1;i>=0;i--)
    {
        reverseString = reverseString + originalString.charAt(i);
    }

    if(reverseString===originalString)
        console.log(`Given ${originalString} is a palindrome`)
    else
        console.log(`Given ${originalString} is not a palindrome`)
}


//Testcase 1: Check with valid palindrome string
isPalindrome("madam")

//Testcase 2: Check with non palindrome string
isPalindrome("abcede")