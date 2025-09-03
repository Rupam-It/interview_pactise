def frequency_char(s):
    seen={}
    for i in s:
        if i in seen: 
            seen[i]+=1
        else:
            seen[i]=1
    return seen
s="rupam manna"
print(frequency_char(s))