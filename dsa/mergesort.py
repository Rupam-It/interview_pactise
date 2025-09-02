def mergesort(l):
    if len(l)<=1:
        return l
    

    mid=len(l)//2
    leftHalf=l[:mid]
    rightHalf=l[mid:]

    leftSorted=mergesort(leftHalf)
    rightSorted=mergesort(rightHalf)
    return merge(leftSorted,rightSorted)

def merge(l1,l2):
    l3=[]
    i=j=0

    while i < len(l1) and j<len(l2):
        if l1[i]<l2[j]:
            l3.append(l1[i])
            i+=1
        else:
            l3.append(l2[j])
            j+=1
        
    l3.extend(l1[i:])
    l3.extend(l2[j:])
    return l3


unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13]
sortedArr = mergesort(unsortedArr)
print("Sorted array:", sortedArr)




