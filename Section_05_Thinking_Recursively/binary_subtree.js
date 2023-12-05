/*
 * Determine if a given binary tree is a sub tree
 * of another binary tree.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// returns an array containing all nodes in in-orderd
function inOrder(tree, list) {
  if (tree === null) {
    return;
  }
  // go left, node, right
  inOrder(tree.left, list);
  list.push(tree.data);
  inOrder(tree.right, list);
}

function preOrder(tree, list) {
  // returns an array containing all nodes in pre-order
  if (tree === null) {
    return;
  }
  // go node, left, right
  list.push(tree.data);
  preOrder(tree.left, list);
  preOrder(tree.right, list);
}

function listToString(list) {
  return list.toString().replace(/,/g, '');
}

function checkSubtree(tree, subtree) {
  if (subtree === null) {
    return true;
  }
  if (tree === null) {
    return false;
  }

  // first do in-order traversal
  let first = [];
  let second = [];
  inOrder(tree, first);
  inOrder(subtree, second);
  console.log(`Tree In-Order: ${first}`);
  console.log(`Subtree In-Order: ${second}`);

//  if (!listToString(first).includes(listToString(second))) return false;

  if (!listToString(first).includes(listToString(second))) {
    return false;
  }

  // now do pre-order traversal
  first = [];
  second = [];
  preOrder(tree, first);
  preOrder(subtree, second);
  console.log(`Tree Pre-Order: ${first}`);
  console.log(`Subtree Pre-Order: ${second}`);

  if (!listToString(first).includes(listToString(second))) {
    return false;
  }
  //if (!listToString(first).includes(listToString(second))) return false;

  return true;
}

//             1
//           2    3
//         4  5  6  7
root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

//              2
//            4   5
root2 = new Node(3);
root2.left = new Node(6);
root2.right = new Node(7);

console.log(checkSubtree(root1, root2));
