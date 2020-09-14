// Problem Solving

// 1. Understand the problem.
// 2. Explore Concrete Examples
// 3. Break it down
// 4. Solve/Simplify
// 5. Look Back and refactor

// Understand the problem

// - Can I restate the problem in my own words?
// - What are the inputs that go into the problem?
// - What are the outputs that should come from the solution to the problem?
// - Can the outputs be determined from the inputs? In other words, do I 
// have enough information to solve the problem?
// - How should I label the important pieces of data that are a part of the problem?

// Task 1: Write a function which takes to numbers and returns their Sum.

const sumOfTwoNums = (num1, num2) => {
    return num1 + num2;
}

console.log(sumOfTwoNums(10, 2));


// Task 2: Write a function which takes in a string and returns counts of each character in the string.

// Problem Solving

// - Understand the problem
// - Explore Concrete examples
// - Break it down
// - Solve & Simplify

const charCount = (str) => {
    // make object to return at end
    let result = {};
    // loop over string, for each character...
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(result[char] > 0){
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    // if the char is a number/letter and key in object, add one to count
    // if the char is not number/letter and key in object, add it and set value to 1
    // if character is something else(space, period, etc.) dont do anything
    return result;
    // return object at end
}

console.log(charCount("hello"));

// Refactoring Questions

// - Can you check the result?
// - Can you derive the result differently?
// - Can you understand it at a glance?
// - Can you use the result or method for some other problem?
// - Can you improve the performance of your solution?
// - Can you think of other ways to refactor?
// - How have other people solved this problem?

