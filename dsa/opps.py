# class Car:
#     wheels = 4
    
#     def __init__(self, name, age, color="Unknown"):
#         self.name = name
#         self.age = age
#         self.color = color
    
#     def start_engine(self):
#         return f"{self.name} is starting its engine!"
    
#     def get_info(self):
#         return f"Car: {self.name}, Age: {self.age} years, Color: {self.color}"

# car1 = Car("Toyota", 4, "Red")
# car2 = Car("Honda", 2, "Blue")

# print(car1.get_info())
# print(car2.start_engine())
# print(f"All cars have {Car.wheels} wheels")


# class Animal:
#     def sound(self):
#         print("Animal make sound")
# class Dog(Animal):
#     def sound(self):
#         print("dog barks")
# d = Dog()
# d.sound() 


# class Father:
#     def skill(self):
#         print("Father: Cooking")

# class Mother:
#     def skill(self):
#         print("Mother: Singing")

# class Child(Father, Mother):  
#     pass

# c = Child()
# c.skill()


class Grandparent:
    def trait(self):
        print("Grandparent: Kind")

class Parent(Grandparent):
    def trait(self):
        print("Parent: Hardworking")

class Child(Parent):
    def trait(self):
        super().trait()

c = Child()
c.trait()   
