let instructor = {
    firstName: 'Kelly',
    isInstuctor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty("firstName"));

//When are arrays slow?

let names = ["charity", "ty", "cash"];
let values = [true, {}, [], 2, "awesome"]

console.log(names[2]); //constant time
//if i add to end of array (push) -- constant time 
//But the beggining re index every single item in the array. --- o(n) time
// push and pop are always faster than shift and unshift

// Big O of Array Operations

// push - O(1)
// pop- O(1)
// shift- O(n)
// unshift- O(n)
// concat- O(n)
// slice-O(n)
// splice-O(n)
// sort- O(N * log N)
// forEach, map, filter, reduce, etc - O(n)