function ListNode(val,next,ptev) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.prev = (ptev===undefined ? null : ptev)
}
var MyLinkedList = function() {
    this.size = 0
    this.head = new ListNode(0)
    this.tail = new ListNode(0)
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) {
        return -1
    }
    let cur
    if (index < this.size / 2) {
        cur = this.head
        for (let i = 0; i <= index; i++) {
            cur = cur.next
        }

    }else{
        cur = this.tail
        for (let i = 0; i < this.size - index; i++) {
            cur = cur.prev
        }
    }
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0,val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size,val)

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return
    }
    if (index <= 0) {
        index = 0
    }
    let pred
    let succ
    if (index < this.size / 2) {
        pred = this.head
        for (let i = 0; i < index; i++) {
            pred = pred.next
        }
        succ = pred.next
    }else{
        succ = this.tail
        for (let i = 0; i < this.size - index; i++) {
            succ = succ.prev
        }
        pred = succ.prev
    }
    this.size++
    const toAdd = new ListNode(val)
    toAdd.prev = pred
    toAdd.next = succ
    pred.next = toAdd
    succ.prev = toAdd
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return
    }
    let pred
    let succ
    if (index < this.size / 2) {
        pred = this.head
        for (let i = 0; i < index; i++) {
            pred = pred.next
        }
        succ = pred.next.next
    
    }else{
        succ = this.tail
        for (let i = 0; i < this.size - index - 1; i++) {
            succ = succ.prev
        }
        pred = succ.prev.prev
    
    }
    this.size--
    pred.next = succ
    succ.prev = pred
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
function test() {
    let obj = new MyLinkedList();
    obj.addAtHead(1);
    obj.addAtTail(3);
    obj.addAtIndex(1,2);
    console.log(obj.get(1));
    obj.deleteAtIndex(1);
    console.log(obj.get(1));
}
test();