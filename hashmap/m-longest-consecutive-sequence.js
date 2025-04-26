const assert = require('assert');

/**
* @param {number[]} nums
*/
function longest_consecutive(nums) {
    const m = new Map();
    let max = 0;

    for (const num of nums) {
        m.set(num, ".");
    }

    for (const key of m.keys()) {
        if (m.get(key - 1)) {
            continue;
        }

        let count = 0;
        while (m.get(key + count)) {
            m.set(key + count, null);
            count++;
        }

        max = Math.max(count, max);
    }

    return max;
}

/**
* @param {number[]} nums
*/
function longest_consecutive_simple(nums) {
    let max = 0;
    const set = new Set(nums);

    for (const num of nums) {
        if (!set.has(num - 1)) {
            let length = 1;

            while (set.has(num + length)) {
                length++;
            }

            max = Math.max(max, length)
        }
    }

    return max;
}

// --- Testing --- //

const nums1 = [100, 4, 200, 1, 3, 2];

assert.equal(longest_consecutive(nums1), 4);
assert.equal(longest_consecutive_simple(nums1), 4);
