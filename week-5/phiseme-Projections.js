/**
	Title: phiseme-projections.js
    Author: Manel Phiseme
    Date: 11 September 2022
    Description: MongoDB Shell user Scripts.
 */

// These code below add a new user to the user's collection
db.users.insertOne(
    {
        firstName: "Mabel", 
        lastName: "Fisame", 
        employeeId: "1101", 
        email: "mbel@me.com", 
        dateCreated: new Date()
    });

// This query update Mozart’s email address from wmozart@me.com 
//to mozart@me.com 
db.users.updateOne(
    {
        _id: ObjectId("6310968007ed4af7ce775961")}, 
        {$set: {email: "mozart@me.com"}
    });

//This query show that Mozart's email address changed.
db.users.findOne({email:"mozart@me.com"})

//This query list all documents in the user’s collection displaying 
//only firstName, lastName, and email fields
db.users.aggregate([
    {
        $project: {_id: 0, firstName: 1, lastName: 1, email: 1}
    }])