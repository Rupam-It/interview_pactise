def removeDuplicate(a):
    i=0
    for j in range(1,len(a)):
        if a[j]!=a[i]:
            i+=1
            a[i]=a[j]
    return i+1 , arr       
            

def removeDuplicate2(arr):
    seen={}
    res=[]
    for i in arr:
        if i not in seen:
            seen[i]=True
            res.append(i)
    return res
    

def firstMultiOccur(arr):
    seen={}
    for i in arr:
        if i not in seen:
            seen[i]=True
        else:
            return i
            

arr=[1,2,5,5,5,6,9,9,9,10]
# print(removeDuplicate(arr))
# print(removeDuplicate2(arr))
print(firstMultiOccur(arr))