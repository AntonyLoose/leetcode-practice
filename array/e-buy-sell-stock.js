const assert = require('assert');

/**
* @param {number[]} prices
*/
function maxProfit(prices) {
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }

    return max;
}

// --- Testing --- //

const prices = [7, 1, 5, 3, 6, 4];

assert.equal(maxProfit(prices), 5);
