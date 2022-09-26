         
/**
	Title: ministryofmongodb-whatabook.js
    Author: William Watlington/ Manel Phiseme/Andres Macias
    Date: 24 September 2022
    Description: Whatabook mongodb queries .
 */

   // query list of all books
   db.books.find( {} )

   // query list books by genre
   db.books.find( { "genre": user_genre } )
   
   // query list books by author 
   db.books.find( { "author": user_author } )
   
   // query book by bookId
   db.books.find_one( { "bookId": user_book_id } )
   
   // query to list customer's wishlist
   db.customers.find_one( { "customerId": user_input_id } )
   
   // query to add a book to customer's wishlist
   db.customers.update_one(
       { 'customerId': user_input_id },
       { '$push': {'wishlist': book_to_add } }
   )
   
   // query to remove a book from a customer's wishlist
   db.customers.update_one(
       { 'customerId': user_input_id },
       { '$pull': {'wishlist': { "bookId": input_id }} }
   )