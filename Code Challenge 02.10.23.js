// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  //when there is null given tree
  if(!t1 || !t2) return t1 || t2

  //both of trees are not null,
  //we sum the value, and transform t1,
  //we can also choose t2, and return t2 at the end
  t1.val += t2.val
  
  //recursively traverse left path  
  t1.left = mergeTrees(t1.left, t2.left)
  //recursively traverse right path
  t1.right = mergeTrees(t1.right, t2.right)
  
  //return merged tree
  return t1
     
    
}
