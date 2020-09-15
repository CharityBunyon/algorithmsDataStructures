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

const charCountTwo = (str) => {
    let obj = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){ //how he weeds out spaces or characters that aren't numbers or letters
            if(obj[char] > 0) {
                obj[char]++;
            } else{
                    obj[char] = 1;
            }
        }
        }
        return obj;
    };

    console.log(charCountTwo("hello"));


const charCountThree = (str) => {
    let obj = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){ //how he weeds out spaces or characters that aren't numbers or letters
            obj[char] = ++obj[char] || 1; // if object is truthy, if true then add 1, if false set it equal to 1
        } 
    }
        return obj;
};

    console.log(charCountThree("hello"));

const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

const charCountFour = (str) => {
    let obj = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){ // how he weeds out spaces or characters that aren't numbers or letters
            obj[char] = ++obj[char] || 1; // if object is truthy, if true then add 1, if false set it equal to 1
        } 
    }
        return obj;
};

    console.log(charCountFour("hello there"));

