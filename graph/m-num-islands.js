const assert = require('assert');

/**
* @param {string[][]} grid
* @returns {number} the number of islands
*/
function numIslands(grid) {
    function dfs(grid, i, j) {
        if (
            grid[i] === undefined ||
            grid[i][j] === undefined ||
            grid[i][j] === "0"
        ) {
            return;
        }

        grid[i][j] = "0";

        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
    }

    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                islands++;
                dfs(grid, i, j);
            }
        }
    }

    return islands;
}

// --- Testing --- //

const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

assert.equals(numIslands(grid1), 1);
assert.equals(numIslands(grid2), 3);
