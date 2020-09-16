// Beginner 1:
// Implement a function/method called “reduceFraction” that takes two integer arguments, a fraction’s numerator and denominator, and returns an array/list/tuple, etc. 
// that represents the reduced fraction.

// Example:
// reduceFraction(2, 4) => [1, 2];
// reduceFraction(36, 120) => [3, 10]
// reduceFraction(785, 9321) => [157, 1864]


const getDivisor = (a, b) => {
    if(!b) {
        return a;
    }
     
  return divisor = getDivisor(b, a % b);
}


const reduceFraction = (a, b) => {
    let coolArray= [];
    let divisor = getDivisor(a, b);
    let num1 = a / divisor;
    let num2 = b / divisor;

    coolArray.push(num1, num2);
    console.log(coolArray);

}

console.log(reduceFraction(785, 9320 ));