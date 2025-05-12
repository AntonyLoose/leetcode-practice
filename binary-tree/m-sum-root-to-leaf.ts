import { TreeNode } from "./bin-tree";

function sumNumbers(root: TreeNode | null): number {
    const nums: number[] = [];
    const get_nums = (root: TreeNode | null, num: number = 0) => {
        if (!root) {
            return;
        }

        const newNum = parseInt(num + root.val.toString());
        if (!root.left && !root.right) {
            nums.push(newNum);
        }

        get_nums(root.left, newNum);
        get_nums(root.right, newNum);
    }

    get_nums(root);
    return nums.reduce((acc, curr) => acc + curr, 0);
};
