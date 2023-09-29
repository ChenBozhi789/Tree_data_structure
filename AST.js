// 创建一个节点
class Node {
    constructor(name) {
        this.name = name;
        this.fileholder = [];
    }

    // 添加子节点的方法
    addChild(node) {
        this.fileholder.push(node);
    }

    // 打印节点的方法
    // 每个子节点的层级都比其父节点多两个空格的缩进，这是由于indent + ' '这部分代码实现的。
    print(indent = '') {
        console.log(`${indent}${this.name}`);
        this.fileholder.forEach(child => child.print(indent + '  '));
    }
}

// 创建根节点
let root = new Node('Study Plan');

// 创建子节点
let courses = new Node('Courses');
let javascript = new Node('JacaScript');

// 将子节点添加到根节点上
root.addChild(courses);
root.addChild(javascript);

// 为 Courses 添加两个子节点
let syd502 = new Node('syd502');
let web504 = new Node('web504');
courses.addChild(syd502);
courses.addChild(web504);

// 为 JavaScript 添加两个子节点
let listed_link = new Node('listed_link');
let hash = new Node('hash');
javascript.addChild(listed_link);
javascript.addChild(hash);

root.print();