class Node {
  constructor(val, prev = null, next = null, child = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
  }
}

var flatten = function (head) {
  if (!head) return head;
  let tmp = head;
  let stack = [];
  while (tmp) {
    if (tmp.child) {
      if (tmp.next) {
        stack.push(tmp.next);
      }
      tmp.next = tmp.child;

      tmp.next.prev = tmp;

      tmp.child = null;
    }
    if (!tmp.next && stack.length > 0) {
      tmp.next = stack.pop();
      tmp.next.prev = tmp;
    }

    tmp = tmp.next;
  }
  return head;
};

// 测试用例
function printList(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  console.log(res.join(" -> "));
}

// 创建多层双向链表
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.child = new Node(7);
head.next.next.child.next = new Node(8);
head.next.next.child.next.prev = head.next.next.child;
head.next.next.child.next.child = new Node(11);
head.next.next.child.next.child.next = new Node(12);
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = new Node(5);
head.next.next.next.next.prev = head.next.next.next;
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.prev = head.next.next.next.next;

// 扁平化链表
head = flatten(head);

// 打印扁平化后的链表
printList(head);
