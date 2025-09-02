# n=int(input("enter length: "))

# for i in range(n):
#     l1.append(int(input("enter element: ")))

# print(l1)


# l1 = [3, 6, 9, 12, 15, 18, 21]
# l2 = [4, 8, 12, 16, 20, 24, 28]
# l3=[]
# for i in range(1,len(l1),2):
#     l3.append(l1[i])

# for i in range(0,len(l2),2):
#     l3.append(l2[i])

# print(l3)


# sample_list = [11, 45, 8, 23, 14, 12, 78, 45, 89]
# # Expected: [8, 45, 11], [12, 14, 23], [89, 45, 78]

# chunk_size=len(sample_list)//3

# for i in range(0,len(sample_list),chunk_size):
#     chunk=sample_list[i:i+chunk_size]
#     print(chunk[::-1], end="\n")
# first_list = [2, 3, 4, 5, 6, 7, 8]
# second_list = [4, 9, 16, 25, 36, 49, 64]

# result = set()

# # loop through both lists by index
# for i in range(len(first_list)):
#     # make tuple from elements at same index
#     pair = (first_list[i], second_list[i])
#     # add tuple to set
#     result.add(pair)

# print(result)

def mix_example(x,*args, **kwargs):
    print(x)
    print("args: ",args)
    print("kwargs: ",kwargs)

mix_example(10,1,2,3,4,name="gandu",role="keeper")
