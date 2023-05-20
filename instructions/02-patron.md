# Create a patron class

## Introduction:

In this exercise, we're going to construct a Patron class representing a library patron, an individual who can check out and return books from a library.

## Steps:

1. Start by declaring a class called Patron.

2. Add a constructor method in your class that takes three parameters: id, firstName, and lastName. Assign these parameters to instance variables of the same name.

3. Also in the constructor, initialize an empty checkedOutBooks array. This will hold the Book objects that a patron checks out.

4. Define a method called checkOutBooks(...books). This method should iterate over the books passed in, and push each one to the checkedOutBooks array.

5. Define a returnBooks(...books) method. This method should iterate over the books passed in, find each book in the checkedOutBooks array, and remove it.

6. Implement a method named getBooksCheckedOut(). This method will return the checkedOutBooks array.
