const assert = require('assert');

/**
* @param {string[]} strs
*/
function group_anagrams(strs) {
    const map = {};

    for (const str of strs) {
        const sorted = str
            .split("")
            .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
            .join("");

        if (map[sorted] === undefined) {
            map[sorted] = [];
        }

        map[sorted].push(str);
    }

    return Object.values(map);
}

function sort_str_arr(arrs) {
    return arrs
        .map(group => group.sort())
        .sort((a, b) => a[0].localeCompare(b[0]));
}

// --- Testing --- //

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

assert.deepEqual(sort_str_arr(group_anagrams(strs)), sort_str_arr(expected));
