/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curr = new ListNode(0);
    let p = l1;
    let q = l2;
    let r = curr;
    let carry = 0;
    while(p != null || q != null) {
        let x = (p==null) ? 0 : p.val;
        let y = (q==null) ? 0 : q.val;
        let sum = x + y + carry;
        if(sum >= 10) carry = 1;
        else carry = 0;
        r.next = new ListNode(sum % 10);;
        r = r.next;
        if(p != null) p = p.next;
        if(q != null) q = q.next;
    }
    if(carry > 0) r.next = new ListNode(carry);
    return curr.next;  
};