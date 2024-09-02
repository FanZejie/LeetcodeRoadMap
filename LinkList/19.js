var removeNthFromEnd = function(head, n) {
    let index = 1
    let size = 0
    let tmp = head
    while(tmp.next){
        tmp = tmp.next
        size++
    }
    if(n === size+1){
        return head.next
    }
    let prev = head
    while(index < size - n + 1){
        prev = prev.next
        index++
    }
    prev.next = prev.next.next
    return head
};