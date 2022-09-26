/**
	Title: phiseme-python with mongodb.js
    Author: Professor Krasso
    Modified By: Manel Phiseme
    Date: 14 August 2022
    Description: MongoDB Shell aggregate Queries 
    for the houses and students collections.
 */

//query to load the house.js file to the web335db database
//on mongoose 
load("houses.js")

//query to show a list of documents in the houses collections
db.houses.find()

//query to show a list of documents in the student's collections
db.students.find()

//query to add a document to the student's collections
db.students.insertOne(
    { 
        firstName: 'Mabel', 
        lastName: 'Phil', 
        studentId: 's1223', 
        houseId: 'h1118'
    })
// Query to display the new doc added.
db.students.findOne({firstName: 'Mabel'})

// Query to delete the doc created
db.students.deleteOne({firstName:"Mabel"})

// Query to prove doc is no longer there
db.students.findOne({firstName: 'Mabel'})

// aggregate query to show list of students by house
db.houses.aggregate([
    { 
        $lookup:{ 
            from:"students", 
            localField:"houseId",
            foreignField:"houseId", 
            as:"students" 
        }
    }
])

// aggregate query to show a list of students for house of
// Gryffindor 
db.houses.aggregate([
    { 
        $match : 
        {
            houseId:"h1007"
        }
    }, 
    {
        $lookup:
        {
            from:"students",
            localField:"houseId",
            foreignField:"houseId",
            as:"house_Griff_students"
        } 
    }
])

//Query to show a list of students for the Eagle mascot
//using $match and $lookup
db.houses.aggregate(
    [
        {
            $match:
            {
                mascot:"Eagle"
            }
        }, 
        {
            $lookup:
            {
                from:"students", 
                localField:"houseId",
                foreignField:"houseId",
                as:"eagle_mascot_student"
            }
        }
    ])
    