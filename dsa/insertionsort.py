def intertionsort(l1):
    for i in range(1,len(l1)):
        cur=l1[i]
        j=i-1

        while(j>=0 and l1[j]>cur):
            l1[j+1]=l1[j]
            j-=1
        arr[j+1]=cur
    
    return l1


arr=[12, 11, 13, 5, 6 ]
arr=intertionsort(arr)
print(arr)

