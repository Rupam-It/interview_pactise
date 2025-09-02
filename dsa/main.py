# def Count_vowels(s:str)->int:
#     v=['a','e','i','o','u']
#     c=0
#     for i in s: 
#         if i in v:
#             c+=1
#         else:
#             continue
#     return c

# res=Count_vowels("education")
# print(res)
# -----------------------------------
# def nonRepeatChar(s:str):
#     dict1={}
#     for i in s:
#         dict1[i]=dict1.get(i,0)+1
    
#     for i in s:
#         if dict1[i]==1:
#             return i
#     return None

# res= nonRepeatChar("aabbccde")
# print(res)

# --------------------------

# def anagram(s1,s2):
#     d={}
#     for i in s1:
#         d[i]=d.get(i,0)+1
#     for i in s2:
#         if i not in d:
#             return False
#         d[i] -=1
#         if d[i]<0:
#             return False
    
#     return all(count==0 for count  in d.values())
# # Example usage
# print(anagram("listen", "silent"))  # True
# print(anagram("hello", "world"))    # False
# ------------------------------------------------
# def title_case(s):
#     s=list(s)
#     for i in range(0,len(s)):
#         if i==0: 
#             s[i]=s[i].upper()
#         elif s[i]==" ":
#             s[i+1]=s[i+1].upper()
#     print("".join(s))
# title_case("hello world")
# -------------------------
# def Remove_all_non_alphabetic_characters(s):
#     s1=[]
#     for i in s: 
#         if i.isalpha():
#             s1.append(i)
#     print("".join(s1))

# Remove_all_non_alphabetic_characters("Hello@123")
# -----------------------------------------------
# def rotate_by_one_number(s:list):
#     temp=s[-1]
#     for i in range(len(s)-2,-1,-1):
#         s[i+1]=s[i]
#     s[0]=temp
#     print(s)
# s=[1,2,3,4,5,6]
# rotate_by_one_number(s)
# -----------------------------------------------
# def kadane(a):
#     maxEndHere=maxSoFar=a[0]
#     for i in range(1,len(a)):
#         maxEndHere=max(maxEndHere+a[i],a[i])
#         maxSoFar=max(maxSoFar, maxEndHere)
#     return maxSoFar

# arr = [2, 3, -8, 7, -1, 2, 3]
# print("Maximum subarray sum:", kadane(arr))

# -----------------------------------------------
# def kadane_with_subarray(arr):
#     max_ending_here = max_so_far = arr[0]
#     start = best_start = best_end = 0

#     for i in range(1, len(arr)):
#         if max_ending_here + arr[i] < arr[i]:
#             max_ending_here = arr[i]
#             start = i  # new start
#         else:
#             max_ending_here += arr[i]

#         if max_ending_here > max_so_far:
#             max_so_far = max_ending_here
#             best_start = start
#             best_end = i

#     # max sum and subarray
#     return max_so_far, arr[best_start:best_end + 1]

# # Example usage:
# arr = [2, 3, -8, 7, -1, 2, 3]
# max_sum, subarray = kadane_with_subarray(arr)
# print("Maximum sum:", max_sum)  # 11
# print("Subarray with maximum sum:", subarray)  # [7, -1, 2, 3]
# -----------------------------------------------


