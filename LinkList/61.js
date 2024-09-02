var rotateRight = function(head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }
    let add = n - k % n;
    if (add === n) {
        return head;
    }
    cur.next = head; // 将链表首尾相连
    while (add) {
        cur = cur.next;
        add--;
    }
    //此时cur指向的最后一个节点也就是新的头节点的前一个节点
    console.log(cur.val)
    const ret = cur.next; //记录新的头节点
    cur.next = null; // 将链表断开
    return ret;
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

printLinkedList(rotateRight(head, 2));
// 打印链表的工具函数
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}