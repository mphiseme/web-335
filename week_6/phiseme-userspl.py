"""
Title: phiseme-userspl.py
Author: Manel Phiseme
Date: 18 June 2022
Description: Exercise 6.3
"""

 #import the MongoClient
from pymongo import MongoClient

 #build a connection string to connect to
client = MongoClient("mongodb+srv://web335_user:s3cret@buwebdev-cluster-1.96qtg.mongodb.net/web335DBretryWrites=true&w=majority")

#configure a variable to access the web335DB
db = client['web335DB']

#Python for loop to display all document in the user's collection
for user in db.users.find():
    print(user)

#Python code to display document with employeeID of 1011
print(db.users.find_one({"employeeId":"1011"}))

#Python code to display document with last name Mozart
print(db.users.find_one({"lastName":"Mozart"}))