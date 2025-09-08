l=[0,1,2,3,0,8,6,0,0,324,3,4]

j=0
for i in l:
    if i!=0:
        j+=1
        l[j],i=i,l[j]

print(l)