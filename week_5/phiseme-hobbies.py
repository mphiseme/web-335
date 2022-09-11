# Title: phiseme_hobbies.py
#Author: Manel Phiseme
#Date: 9/11/2022
#Description: Python Conditionals, Lists, and Loops

#A list of hobbies
hobList = ["singing", "cooking", "drawing", "basketball","music"]

#for loop to loop through hobby list and print them
for hob in hobList:
    print(hob)

#list of days from Sunday to Saturday
days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

#for loop to loop through list of days 
for day in days:
    #if statement to check if day is Sunday
    if day == 'Sunday':
        #if day is Sunday the below message is displayed
        print("Today is " + day + " you are off, go and enjoy your hobbies")
    #if statement to check if day is Saturday
    elif day == "Saturday":
        #if day is Sunday the below message is displayed
        print("Today is " + day + " you are off, enjoy your hobbies")
    else:
        #if day is not Sunday nor Saturday the below message is displayed
        print( day + " is a work day")


