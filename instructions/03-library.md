# Create a library class

## Introduction:

In this exercise, we're going to create a Library class. Each instance of this class will represent a single library that maintains a collection of books and a list of patrons.

## Steps:

1. Declare a class named Library.

2. Create a constructor that accepts name, city, and maxInventory parameters. Assign these to instance variables.

3. Also in the constructor, initialize an empty patrons array and an empty booksInventory array.

4. Create an addPatron(patron) method. This method should push the patron object into the patrons array.

5. Define an addBooks(...books) method. This method should push each book into the booksInventory array.

6. Implement checkOutBooks(patron, ...books) method. This method should iterate over the passed books, call checkOut() on each book, and also add each book to the patron's checked out books.

7. Create a returnBooks(patron, ...books) method. This method should iterate over the passed books, call return() on each book, and also remove each book from the patron's checked out books.

8. Finally, implement methods to provide details about the library:

   - getInventorySize(): return the length of the booksInventory array.

   - getInventoryStatus(): return a string representing the current inventory size and the maximum inventory size. The string should be in the format of `books/maxBooks`

   - hasBook(book): return a boolean indicating whether the passed book is in the booksInventory array.
