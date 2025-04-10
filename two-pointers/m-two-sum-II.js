const assert = require('assert');

function twoSum(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;
    let sum;

    while (sum !== target && p1 < p2){
        sum = numbers[p1] + numbers[p2];
        if (sum < target) p1++;
        if (sum > target) p2--;
    }

    // output expected in 1-indexed form
    return [p1+1, p2+1];
}

// --- Testing --- //
const numbers = [2, 7, 11, 15];
const target = 9;
const expected = [1, 2];

assert.deepStrictEqual(expected, twoSum(numbers, target));
