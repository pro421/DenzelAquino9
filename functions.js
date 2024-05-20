//Supply the missing code from the comment that says "Write your code here" or you may make your own algorithm/code solution as long as the instruction is followed.

//1. Problem: Write a function to calculate the area of a rectangle given its length and width.

function calculateRectangleArea(length, width) {
    
    return length * width
  }

  console.log(calculateRectangleArea(5, 8))

// Testing the function by invoking or calling it.
// Write your code here
// If the arguments are 5 and 8, the expected output is 40

//2.  Problem: Write a function to reverse a string.

function reverseString(str) {
    return str.split(``).reverse().join(``);
}

// Testing the function or invoking of the function
console.log(reverseString("hello")); // Output: "olleh"
//3. Problem: Write a function to generate a random number between a given minimum and maximum value.

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 

//Testing the function by invoking or calling it.
console.log(generateRandomNumber(1, 10)); // Output: Random number between 1 and 10


//4. Problem: Write a function to count the number of vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count;
}

// Testing the function by invoking or calling it.
console.log(countVowels("hello")); // Output: 2

//5. Problem: Write a function that takes an integer as input and returns "Even" if the number is even, and "Odd" if the number is odd.
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd"; 
}

// Testing the function by invoking or calling it.
console.log(checkEvenOrOdd(7));  // Output: Odd
console.log(checkEvenOrOdd(10)); // Output: Even
