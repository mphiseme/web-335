/**
	Title: phiseme-mongodbshell.js
    Author: Manel Phiseme
    Date: 9/4/2022
    Description: MongoDB Shell command to explore users database.
 */

// display documents in user's collection
db.users.find()

//find user with email address jbach@me.com.
db.users.find({email:"jbach@me.com"})

//find user with last name "Mozart"
db.users.find({lastName:"Mozart"})

//find user with last name "Richard"
db.users.find({firstName:"Richard"})

//find user user with an employeeId of 1010
db.users.find({employeeId:"1010"})