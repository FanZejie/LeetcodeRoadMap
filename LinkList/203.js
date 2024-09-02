/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummyHead = new ListNode(0)
    dummyHead.next = head
    let tmp = dummyHead
    while(tmp.next !== null){
        if(tmp.next.val == val){
            tmp.next = tmp.next.next
        }else{
            tmp = tmp.next
        }
    }
    return dummyHead.next
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
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
// 构建链表的工具函数
function buildLinkedList(arr) {
    if (arr.length === 0) return null;
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

// 测试方法
function testRemoveElements() {
    // 示例1：输入链表 [1, 2, 6, 3, 4, 5, 6]，要删除的元素是 6
    let head = buildLinkedList([1, 2, 6, 3, 4, 5, 6]);
    let val = 6;
    console.log("原始链表:");
    printLinkedList(head);

    head = removeElements(head, val);

    console.log("删除 6 后的链表:");
    printLinkedList(head);

   
}

// 执行测试
testRemoveElements();
