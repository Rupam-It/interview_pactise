m=[]
m1=[1,2,3]
m.append(m1)

for i in m:
    print(i)

m2 =[x**2 for x in m1 if x%2!=0 ]
print(m2)

m3=(x**2 for x in m1 if x%2!=0 )
print(m3)
for i in m3:
    print(i)