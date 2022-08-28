# Title: phiseme_calculator.py
#Author: Manel Phiseme
#Date: 8/22/2022
#Description: Python Variables and Functions

#This function add two 
# inputs and return the result
def add(var_1, var_2):
    total = var_1 + var_2
    return total


#This function subtract 
# two inputs and return the result
def subtract(var_1, var_2):
    total = var_1 - var_2
    return total

#This function divide 
#two inputs and return the result
def divide(var_1, var_2):
    total = var_1 // var_2
    return total

#This function multiply 
# two inputs and return the result
def multiply(var_1, var_2):
    total = var_1 * var_2
    return total

#variables declared and assigned values
num1 = 5
num2 = 10
num3 = 85
num4  = 100
num6 = 44

#below codes use used all the functions that 
# created and print out the values to the console
print("num4 + 44 = " + str(add(num4,num6)))
print("85 - 5 = " + str(subtract(num3,num1)))
print("100 / 10 = " + str(divide(num4,num2)))
print("85 * 5 = " + str(multiply(num3,num1)))
