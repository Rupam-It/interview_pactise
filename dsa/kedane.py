def kedane_algo(arr):
    curmax=golmax=arr[0]
    for i in range(len(arr)):
        curmax=max(arr[i],curmax+arr[i])
        golmax=max(golmax,curmax)
    return golmax


