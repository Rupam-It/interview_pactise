class Node:
    def __init__(self,data):
        self.data=data
        self.next=None

    def append(self, data):
        temp=self
        while temp.next:
            temp=temp.next
        temp.next=Node(data)
        

    def display(self):
        temp = self
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("none")

    def reverse(self):
        prev=None
        temp=self
        while temp:
            curr=temp
            new=temp.next
            curr.next=prev
            prev=curr
            temp=new
        return prev
    

ll = Node(1)

ll.append(10)
ll.append(20)
ll.append(30)
 
ll.display()
ll=ll.reverse()
ll.display()

