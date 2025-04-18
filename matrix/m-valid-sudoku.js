const assert = require('assert');

function isValidSudoku(board) {
    const rows = new Map();
    const cols = new Map();
    const boxes = new Map();

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            const box_key = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
            if (!boxes.get(box_key)) boxes.set(box_key, new Set());
            if (!rows.get(r)) rows.set(r, new Set());
            if (!cols.get(c)) cols.set(c, new Set());

            const cell = board[r][c];
            if (cell === ".") {
                continue;
            } else if (
                rows.get(r).has(cell) ||
                cols.get(c).has(cell) ||
                boxes.get(box_key).has(cell)
            ) {
                return false;
            }

            rows.get(r).add(cell);
            cols.get(c).add(cell);
            boxes.get(box_key).add(cell);
        }
    }

    return true;
}

// --- Testing --- //

const board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
const expected = true;

const board2 =
    [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
const expected2 = false;

assert.equal(isValidSudoku(board), expected, "Case 1 failed.");
assert.equal(isValidSudoku(board2), expected2, "Case 2 failed.");
