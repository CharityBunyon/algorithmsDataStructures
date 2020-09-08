const revString = str => str.split('').reverse().join('');

console.log(revString('hello there girly'));

//calculates the sum of all numbers from 1 up to some number n

const addUpTo = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

// console.log(addUpTo(6));

//or
const addUpTo2 = (n) => {
    return n * (n + 1) / 2;
}

//console.log(addUpTo2(6))

// let t1 = performance.now();
// addUpTo2(1000000000);
// let t2 = performance.now();
// console.log(`Time Elasped: ${(t2-t1) /1000} seconds.`)


let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elasped: ${(t2-t1) /1000} seconds.`)

let a= ['a', 'b', 'c'];
a[100] = 'fox';
console.log(a);

