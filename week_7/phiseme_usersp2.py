"""
Title: phiseme-usersp2.py
Author: Manel Phiseme
Date: 22 September 2022
Description: Exercise 7.3 Python with MongoDb
"""

#import the MongoClient
from pymongo import MongoClient

import datetime
newDate = datetime.datetime.now()

#build a connection string to connect to
client = MongoClient("mongodb+srv://web335_user:s3cret@buwebdev-cluster-1.96qtg.mongodb.net/web335DBretryWrites=true&w=majority")

#Configure a variable to access the web335
db = client["web335DB"]

#Python code to create mew user document
db.users.insert_one({
    "firstName":"Mike",
    "lastName": "filsame",
    "employeeId":"1201",
    "email": "jb@me.com",
    "dateCreated": newDate
})

#Python code to display the newly created document
print(db.users.find_one({"employeeId":"1201"}))

#Python code to update email add of new document
db.users.update_one(
    {"employeeId": "1201"},
    { "$set": {"email":"job@me.com"}
}
)

#Python code to display updated document
print(db.users.find_one({"employeeId":"1201"}))

#Python code to created document
db.users.delete_many({    
    "employeeId":"1201",    
})

#Python code to prove document deleted
print(db.users.find_one({"employeeId":"1201"}))