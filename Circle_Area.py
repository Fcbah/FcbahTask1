import math

print("******* A program that computes a Circle's Area **********")
print("Python Task 1 - Fcbah")
radius = 0
try:
    radius = float(input("Please input the radius of the circle: "))
except ValueError:
    print("Invalid input")
else:
    area = math.pi * radius**2
    print("The area of a circle with radius %.2f is %.4f"%(radius,area))


 