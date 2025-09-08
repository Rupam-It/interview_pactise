def my_decorator(func):
    def wrapper():
        print("previous")
        func()
        print("after")
    return wrapper

@my_decorator
def say_hello():
    print("hello world")

say_hello()
