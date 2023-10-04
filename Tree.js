class Node {
    // 便于查看类的属性
    name = '';
    childnode = [];
    
    constructor(name) {
        this.name = name;
    }

    addChild(node) {
        this.childnode.push(node);
    }
}

function BST(node) {
    let queue = [];
    // 推入队列
    queue.push(node);

    while (queue.length > 0) {
        // 将队头拿出放入 currentnode
        let currentnode = queue.shift();
        
        // 访问这个元素
        console.log(currentnode.name);

        // 将元素的子节点推入队尾
        for(let i = 0; i < currentnode.childnode.length; i++) {
            queue.push(currentnode.childnode[i]);
        }
    }
}

// 创建根节点
let root = new Node('Study_Plan');

// 创建子节点
let courses = new Node('Courses');
let javascript = new Node('JavaScript');

// 将子节点添加至根节点
root.addChild(courses);
root.addChild(javascript);

courses.addChild(new Node('CSA502'));

javascript.addChild(new Node('DOM'));
javascript.addChild(new Node('CSS'));
javascript.addChild(new Node('Pair-coding'));

BST(root);

function DST(node) {
    let stack = [];
    stack.push(node);

    while (stack.length > 0) {
        let currentnode = stack.pop();

        console.log(currentnode.name);
        
        for(let i = currentnode.childnode.length - 1; i >= 0; i--) {
            stack.push(currentnode.childnode[i]);
        }
    }
}

console.log('///////////////////////////////////');
DST(root);