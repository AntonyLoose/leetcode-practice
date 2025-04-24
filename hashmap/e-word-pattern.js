const assert = require('assert');

/**
* @param {string} pattern
* @param {string} s
*/
function word_pattern(pattern, s) {
    const letters_map = {};
    const words_map = {};
    const letters = pattern.split("");
    const words = s.split(" ");

    if (letters.length !== words.length) return false;

    for (let i = 0; i < letters.length; i++) {
        // We need to add some char to the end to make keywords e.g. constructor work
        const letter = letters[i] + "~";
        const word = words[i] + "~";
        letters_map[letter] = letters_map[letter] ?? word;
        words_map[word] = words_map[word] ?? letter;
        if (
            letters_map[letter] !== word ||
            words_map[word] !== letter
        ) {
            return false;
        }
    }

    return true;
}

// --- Testing --- //

const pattern = "abba";
const s = "dog cat cat dog";
const s2 = "dog dog dog dog";
const s3 = "dog constructor constructor dog";

assert.equal(word_pattern(pattern, s), true);
assert.equal(word_pattern(pattern, s2), false);
assert.equal(word_pattern(pattern, s3), true);
