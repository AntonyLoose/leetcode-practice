import { TreeNode } from "./bin-tree";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (inorder.length) {
        const middle = inorder.indexOf(preorder.shift() as number);
        const root = new TreeNode(inorder[middle] ?? null);

        root.left = buildTree(preorder, inorder.slice(0, middle));
        root.right = buildTree(preorder, inorder.slice(middle + 1));

        return root
    }

    return null;
};
