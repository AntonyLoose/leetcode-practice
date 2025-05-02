const assert = require('assert');

/**
* @param {string} s
* @param {string} t
*/
function is_isomorphic(s, t) {
    const m1 = {};
    const m2 = {};

    for (let i = 0; i < s.length; i++) {
        const char1 = s[i];
        const char2 = t[i];

        m1[char1] = m1[char1] ?? char2;
        m2[char2] = m2[char2] ?? char1;

        if (m1[char1] !== char2 || m2[char2] !== char1) return false;
    }

    return true;
}
