const assert = require('assert');

/**
* @param {string[]} tokens
*/
function eval_rps(tokens) {
    const stack = [];
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => b - a,
        "/": (a, b) => b / a,
        "*": (a, b) => a * b
    }

    for (const token of tokens) {
        if (!operators[token]) {
            stack.push(token);
        } else {
            const a = parseInt(stack.pop());
            const b = parseInt(stack.pop());
            const out = operators[token](a, b);
            stack.push(out);
        }
    }

    return parseInt(stack.pop());
}

// --- Testing --- //

const t1 = ["2", "1", "+", "3", "*"];
const t2 = ["4", "13", "5", "/", "+"];
const t3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

assert.equal(eval_rps(t1), 9);
assert.equal(eval_rps(t2), 6);
assert.equal(eval_rps(t3), 22);
