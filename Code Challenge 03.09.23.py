# Given the head of a linked list, remove the nth node from the end of the list and return its head.


class Solution:
    def removeNthFromEnd(self, head, n):
        def remove(head):
            if not head:
                return 0, head
            i, head.next = remove(head.next)
            return i+1, (head, head.next)[i+1 == n]
        return remove(head)[1]
