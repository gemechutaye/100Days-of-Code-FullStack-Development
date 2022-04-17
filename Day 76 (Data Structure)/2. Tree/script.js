const tree = new Tree(1, 'AB');

tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG');

[...tree.preOrderTraversal()].map(x => x.value);
// ['AB', 'AC', 'BC', 'BCG']

tree.root.value;              // 'AB'
tree.root.hasChildren;        // true

tree.find(12).isLeaf;         // false
tree.find(121).isLeaf;        // true
tree.find(121).parent.value;  // 'BC'

tree.remove(12);

[...tree.postOrderTraversal()].map(x => x.value);
// ['AC', 'AB']