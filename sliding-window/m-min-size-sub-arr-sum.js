const assert = require('assert');

function minSubArrayLength(target, nums) {
    let w1 = 0;
    let w2 = -1;
    let min = null;
    let sum = 0;

    while (w2 < nums.length) {
        if (sum < target) {
            w2++;
            sum += nums[w2];
        }

        if (sum >= target) {
            const length = w2 - w1 + 1;
            min = length < min || min == null ? length : min;
            sum -= nums[w1];
            w1++;
        }
    }

    return min ?? 0;
}

// --- Testing --- //
const nums = [2, 3, 1, 2, 4, 3];
const target = 7;
const expected = 2;
const nums2 = [1, 1, 1, 1, 1, 1, 1];
const target2 = 11;
const expected2 = 0;
const nums3 = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
const target3 = 15;
const expected3 = 2;

assert.equal(expected, minSubArrayLength(target, nums), `${minSubArrayLength(target, nums)} !== ${expected}`);
assert.equal(expected2, minSubArrayLength(target2, nums2), `${minSubArrayLength(target2, nums2)} !== ${expected2}`);
assert.equal(expected3, minSubArrayLength(target3, nums3), `${minSubArrayLength(target3, nums3)} !== ${expected3}`);
