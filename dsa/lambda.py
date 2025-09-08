s= lambda x, b: x+b
print(s(5,6))

def my_gen():
    yield 1
    yield 2
    yield 3

g = my_gen()
print(next(g))  
print(next(g))  
print(next(g))  
