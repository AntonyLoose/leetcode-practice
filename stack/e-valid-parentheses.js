const assert = require('assert');

/**
* @param {string} s
*/
function valid_parentheses(s) {
    const stack = [];
    const expected = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (s[i] === ")" || s[i] === "]" | s[i] === "}") {
            const bracket = stack.pop();
            if (s[i] !== expected[bracket]) return false;
        }
    }

    // If brackets are left, we have not closed everything
    return stack.length === 0;
}

// --- Testing --- //

const s1 = "()";
const s2 = "()[]{}";
const s3 = "(]";
const s4 = "(([])(";

assert.equal(valid_parentheses(s1), true);
assert.equal(valid_parentheses(s2), true);
assert.equal(valid_parentheses(s3), false);
assert.equal(valid_parentheses(s4), false);
