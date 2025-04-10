function rotate(nums, k) {
    const n = nums.length;
    const shift = k % n;
    const rotated = [...new Array(n)];

    for (let i = 0; i < n; i++) {
        const shifted_index = (i + shift) % n;
        rotated[shifted_index] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}

/*
* There is another solution, to solve it, write out what the array looks
* like after shifting, you will see a pattern.
* [1, 2, 3, 4, 5, 6, 7] -> [6, 7, 1, 2, 3, 4, 5]
*/

// --- Testing --- //

const input = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(input, 3);

console.log(input);
