import { TreeNode } from "../bin-tree";

function getMinimumDifference(root: TreeNode | null): number {
    let min = Infinity;
    let prev: TreeNode | undefined;

    function dfs(root: TreeNode | null) {
        if (!root) {
            return;
        }

        dfs(root.left);
        min = Math.min(min, Math.abs(root.val - (prev?.val ?? Infinity)));
        prev = root;
        dfs(root.right);
    }
    dfs(root);

    return min
};
