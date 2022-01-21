// const breadthFirstSearch = (source) => {
//   const result = []; // 存放结果的数组
//   // 当前队列为全部数据
//   const queue = JSON.parse(JSON.stringify(source));
//   // 循环条件，队列不为空
//   while (queue.length > 0) {
//     // 第一个节点出队列
//     const node = queue.shift();
//     // 存放结果数组
//     result.push(node.id);
//     // 当前节点有子节点则将子节点存入队列，继续下一次的循环
//     const len = node.children && node.children.length;
//     for (let i = 0; i < len; i += 1) {
//       queue.push(node.children[i]);
//     }
//   }
//   return result;
// };
function BFS(root, target) {
    if (!root)
        return -1;
    var queue = [root]; // Queue<Node> store all nodes which are waiting to be processed
    console.log(queue);
    var step = 0; // number of steps neeeded from root to current node
    // BFS
    while (queue.length > 0) {
        step++;
        var size = queue.length;
        console.log(size);
        for (var i = 0; i < size; i++) {
            var cur = queue.shift();
            if (cur.val === target) {
                return step;
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        console.log(queue);
    }
    return -1;
}
var root = {
    val: 1,
    left: {
        val: 2,
        left: { val: 5, left: null, right: null },
        right: { val: 6, left: { val: 8, left: null, right: null }, right: null }
    },
    right: { val: 3, left: null, right: { val: 4, left: null, right: null } }
};
BFS(root, 4);
