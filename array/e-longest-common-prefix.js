const assert = require('assert');

/**
* @param {string[]} strs
*/
function longestCommonPrefix(strs) {
    let max = 0;
    for (const str of strs) {
        max = Math.max(max, str.length);
    }

    let prefix = "";
    for (let i = 0; i < max; i++) {
        let letter = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== letter) return prefix;
        }
        prefix += letter;
    }

    return prefix;
}

// --- Testing --- //

const strs = ["flower", "flow", "flight"];

assert.equal(longestCommonPrefix(strs), "fl");
