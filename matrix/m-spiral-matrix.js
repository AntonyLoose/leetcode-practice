const assert = require('assert');

function spiralOrder(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const spiral = [];
    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 0;

    for (let i = 0; i < rows * cols; i++) {
        spiral.push(matrix[y][x]);
        matrix[y][x] = ".";

        if (
            x + dx >= cols || x + dx < 0 ||
            y + dy >= rows || y + dy < 0 ||
            matrix[y + dy][x + dx] === "."
        ) {
            [dx, dy] = [-dy, dx];
        }

        x += dx;
        y += dy;
    }

    return spiral;
}

// --- Testing --- //

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];

assert.deepEqual(spiralOrder(matrix), expected);
