import { TreeNode } from "../bin-tree";

function averageOfLevels(root: TreeNode | null): number[] {
    const levels: number[][] = [];
    function getLevels(root: TreeNode | null, level: number = 1) {
        if (root === null) {
            return;
        }

        if (level > levels.length) {
            levels.push([]);
        }

        levels[level - 1].push(root.val);

        getLevels(root.left, level + 1);
        getLevels(root.right, level + 1);
    };
    getLevels(root);

    return levels.map(level => level.reduce((acc, curr) => curr + acc, 0) / level.length);
};
