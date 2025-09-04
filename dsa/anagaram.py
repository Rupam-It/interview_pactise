s1 = input("enter 1st string: ")
s2 = input("enter 2nd string: ")

seen = {}

for ch in s1:
    seen[ch] = seen.get(ch, 0) + 1

for ch in s2:
    if ch not in seen:
        print("This is not anagram")
        break
    else:
        seen[ch] -= 1
else:
    if all(v == 0 for v in seen.values()):
        print("This is anagram")
    else:
        print("This is not anagram")
