import { TreeNode } from "../bin-tree";

function levelOrder(root: TreeNode | null): number[][] {
    const levels: number[][] = [];
    function getLevels(root: TreeNode | null, level: number = 1) {
        if (!root) {
            return;
        }

        if (level > levels.length) {
            levels.push([]);
        }

        levels[level - 1].push(root.val);

        getLevels(root.left, level + 1);
        getLevels(root.right, level + 1);
    }
    getLevels(root);

    return levels;
};
