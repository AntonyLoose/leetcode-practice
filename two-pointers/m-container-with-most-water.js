const assert = require('assert');

function maxArea(height) {
    let p1 = 0;
    let p2 = height.length - 1;
    let maxVolume = 0;

    while (p1 < p2) {
        const h1 = height[p1];
        const h2 = height[p2];
        if (h1 > h2) {
            maxVolume = maxVolume < h2 * (p2 - p1) ? h2 * (p2 - p1) : maxVolume;
            p2--;
        } else {
            maxVolume = maxVolume < h1 * (p2 - p1) ? h1 * (p2 - p1) : maxVolume;
            p1++;
        }
    }

    return maxVolume;
}

// --- Testing --- //
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected = 49;

assert.equal(expected, maxArea(height), `${maxArea(height)} !== ${expected}`);
