import { TreeNode } from "../bin-tree";

function kthSmallest(root: TreeNode | null, k: number): number {
    const sorted: number[] = [];

    function dfs(root: TreeNode | null) {
        if (!root) {
            return;
        }
        dfs(root.left);
        sorted.push(root.val);
        dfs(root.right);
    }
    dfs(root);

    return sorted[k - 1];
}

function kthSmallestSpaceEfficient(root: TreeNode | null, k: number): number {
    let index = 0;
    let out = 0;

    function dfs(root: TreeNode | null) {
        if (!root) {
            return;
        }
        dfs(root.left);
        index += 1;
        // 1 indexed
        if (index == k) {
            out = root.val;
            return;
        }
        dfs(root.right);
    }
    dfs(root);

    return out;
};
