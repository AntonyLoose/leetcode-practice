const assert = require('assert');

function lengthOfLongestSubstring(s) {
    let w1 = 0;
    let min = null;

    for (let w2 = 0; w2 < s.length; w2++) {
        for (let i = w1; i < w2; i++) {
            if (s[i] === s[w2]) {
                w1 = i + 1;
                break;
            }
        }

        min = Math.max(min ?? 0, w2 - w1 + 1);
    }

    return min ?? 0;
}

// --- Testing --- //

const str = "abcabcbb";
const expected = 3;

assert.equal(expected, lengthOfLongestSubstring(str), "Case 1 failed.");
