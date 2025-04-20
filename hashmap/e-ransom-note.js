const assert = require('assert');

function canConstruct(ransomNote, magazine) {
    const ransom = create_map(ransomNote);
    const mag = create_map(magazine);

    for (const letter of Object.keys(ransom)) {
        if (ransom[letter] > (mag[letter] ?? 0)) return false;
    }

    return true;
}

function create_map(str) {
    const map = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const count = map[letter] ?? 0;
        map[letter] = count + 1;
    }
    return map;
}

// --- Testing --- //

const note1 = "aa";
const mag1 = "aab";
const expected1 = true;

const note2 = "aa";
const mag2 = "ab";
const expected2 = false;

assert.equal(canConstruct(note1, mag1), expected1);
assert.equal(canConstruct(note2, mag2), expected2);
