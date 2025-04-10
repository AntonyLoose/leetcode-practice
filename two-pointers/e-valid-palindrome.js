const assert = require('assert');

function isPalindrome(s) {
    const parsed_string = s
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    for (let i = 0; i < parsed_string.length; i++) {
        const end = parsed_string.length - i - 1;
        if (parsed_string[i] !== parsed_string[end]) return false;
    }

    return true;
}

// --- Testing --- //

const input_1 = "A man, a plan, a canal: Panama";
const input_2 = "race a car";

assert(isPalindrome(input_1), `Failed: ${input_1}`);
assert(isPalindrome(input_2) === false, `Failed: ${input_2}`);
