# def selection_sort(arr):
#     n = len(arr)
#     for i in range(n):
#         min_idx = i
#         for j in range(i+1, n):
#             if arr[j] < arr[min_idx]:
#                 min_idx = j
#         arr[i], arr[min_idx] = arr[min_idx], arr[i]
#     return arr
# --------------------------------------

# def quick_sort(a):
#     if len(a)<=1:
#         return a
#     pivot = a[0]
#     left=[x for x in a[1:] if x<= pivot]
#     right=[x for x in a[1:] if x > pivot]
#     return quick_sort(left)+[pivot]+quick_sort(right)

# print(quick_sort([10, 7, 8, 9, 1, 5]))

# ----------------------------------------------
# def merge_sort(arr):
#     if len(arr) <= 1:
#         return arr
#     mid = len(arr) // 2
#     left = merge_sort(arr[:mid])
#     right = merge_sort(arr[mid:])
#     return merge(left, right)

# def merge(left, right):
#     result = []
#     i = j = 0
#     while i < len(left) and j < len(right):
#         if left[i] < right[j]:
#             result.append(left[i])
#             i += 1
#         else:
#             result.append(right[j])
#             j += 1
#     result.extend(left[i:])
#     result.extend(right[j:])
#     return result

# # Example
# print(merge_sort([10, 7, 8, 9, 1, 5]))
# ----------------------------------------------


