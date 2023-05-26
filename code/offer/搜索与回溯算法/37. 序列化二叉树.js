/**
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 你需要设计一个算法来实现二叉树的序列化与反序列化。
 * 这里不限定你的序列 / 反序列化算法执行逻辑，
 * 你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。
 * 你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 * 输入：root = [1,2,3,null,null,4,5]
 * 输出：[1,2,3,null,null,4,5]
 */
class Node {
    val
    left
    right
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}
// 序列化二叉树
function Serialize(root) {
    if (root === null) return "[]"
    let _root = [root]
    let res = "["
    while (_root.length > 0) {
        
        node = _root.shift()
        if (node === null) {
            res = res + "null,"
        } else {
            res = res + (node?.val || node) + ","
            _root.push(node.left)
            _root.push(node.right)
        }
        if(_root.every(item => item == null)) {
            _root=[]
        }
    }
    res = res.slice(0,-1) + ']'
    console.log(res)
    return res
}

// 反序列化二叉树
function deserialize(str) {
    if (str === '[]') return null
    let _str = str.slice(1, -1).split(',')
    let i = 1
    let root = new Node(+_str[0])
    const handelStr = (root) => {
        if(root === null) return
        while (i <= _str.length) {
            if (_str[i] !== 'null') {
                root.left = new Node(+_str[i], null, null)
            } else {
                root.left = null
            }
            i++
            if (_str[i] !== 'null') {
                root.right = new Node(+_str[i], null, null)
            } else {
                root.right = null
            }
            i++
            // console.log('root:', root,'left;',root.left, 'right:',root.right)
            root.left  && handelStr(root.left)
            root.right && handelStr(root.right)
        }
        
    }
    handelStr(root)
    return root
    // console.log(root)
}
let root = new Node()
root = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: {
        val: 3,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    }
}
Serialize(root)
// deserialize(Serialize(root))


