class Shape:
    def __init__(self,height=None, width=None):
        self.height=height
        self.width= width

    def Area(self,h,w):
        pass

class rectangle(Shape):
    def __init__(self, height=None, width=None):
        super().__init__(height, width)
        self.height= height
        self.width= width
    def Area(self, h, w):
        return h*w
    
class circle(Shape):
    def __init__(self, r):
        super().__init__()
        self.r=r

    def Area(self):
        return 3.14*self.r*self.r


c= circle(7)
print(c.Area())        
r=rectangle(10,12)
print(r.Area(10,12))
