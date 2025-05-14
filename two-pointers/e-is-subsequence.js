const assert = require('assert');

/**
* @param {string} s
* @param {string} t
*/
function isSubsequence(s, t) {
    let p1 = 0;
    let p2 = 0;

    while (p1 < s.length && p2 < t.length) {
        if (s[p1] === t[p2]) {
            p1++;
        }
        p2++;
    }

    return p1 === s.length;
}

// --- Testing --- //

const s1 = "abc";
const t1 = "ahbgdc";

assert.equal(isSubsequence(s1, t1), true);
