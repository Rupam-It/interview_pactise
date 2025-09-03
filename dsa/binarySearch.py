def linearSearch(a,t):
    for i in range(0,len(a)):
        if a[i]==t:
            return i+1
    return False

def binary(a,t):
    if len(a) == 0:   
        return False

    mid=len(a)//2
    if a[mid] == t:
        return True
    elif a[mid] >t:
        return binary(a[:mid],t)
    else:
        return binary(a[mid+1:],t)
    
    return False


arr=[1,2,5,6,9,10]
print(linearSearch(arr,2))
print(binary(arr,4))