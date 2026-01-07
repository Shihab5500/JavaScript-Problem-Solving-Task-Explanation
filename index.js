// Problem 1: Reverse a String

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;
}
console.log("Problem 1 Output:", reverseString("hello"));


// Problem 2: Count Vowels in a String

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count = count + 1;
        }
    }
    return count;
}
console.log("Problem 2 Output:", countVowels("programming"));


// Problem 3: Check for Palindrome

function isPalindrome(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}
console.log("Problem 3 Output:", isPalindrome("madam"));
console.log("Problem 3 Output:", isPalindrome("hello"));


// Problem 4: Find the Maximum Number

function findMax(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}
console.log("Problem 4 Output:", findMax([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array

function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}
console.log("Problem 5 Output:", removeDuplicates([1, 2, 2, 3, 4, 4]));


// Problem 6: Sum of All Numbers in an Array

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log("Problem 6 Output:", sumArray([1, 2, 3, 4]));


// Problem 7: Find Even Numbers in an Array

function findEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
console.log("Problem 7 Output:", findEvenNumbers([1, 2, 3, 4, 5, 6]));


// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i][0].toUpperCase();
        let restOfWord = words[i].slice(1);
        
        result = result + firstLetter + restOfWord;
        
        if (i < words.length - 1) {
            result = result + " ";
        }
    }
    return result;
}
console.log("Problem 8 Output:", capitalizeWords("hello world"));


// Problem 9: Find the Factorial of a Number

function findFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}
console.log("Problem 9 Output:", findFactorial(5));


// Problem 10: PingPong Challenge

function pingPong() {
    console.log("Problem 10 Output:");
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
pingPong();