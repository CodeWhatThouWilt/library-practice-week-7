# Library System Project

First off, make sure you have the necessary packages installed. You can do so by running:

```
npm install
```

**NOTE**: For test specs to work you'll need to export each class.

In this project, we're going to model a real-world library system that allows a district to manage their libraries, books, and patrons effectively.

By the end of this project, we aim to have a functioning system capable of achieving the following:

- Retrieve a list or count of all patrons across the district's libraries.
- Add new patrons to a specific library.
- Retrieve a list or count of all patrons registered at a specific library.
- Retrieve a list or count of all books available in the district.
- Retrieve a list or count of all books available in a specific library.
- Check if a specific book is checked out.
- Transfer a book from one library to another within the district.
- Determine the maximum inventory a library can hold.
- Gauge how close a library is to its maximum inventory.
- Enable a patron to check out books.
- Process the return of books from a specific patron.
- Display the list of books a specific patron currently has checked out.
- Conduct a search by title to find if a library has a specific book.

Our system comprises four main components, represented as classes: `Book`, `Patron`, `Library`, and `District`.

1. **Book**: This class represents an individual book. Each book has an `id`, `title`, `author`, and `checkedOut` status.
2. **Patron**: Represents a library patron. Each patron has an `id`, `firstName`, `lastName`, and can have a list of `checkedOutBooks`.
3. **Library**: This class represents a library. A library has a `name`, `city`, `maxInventory`, `patrons`, and `booksInventory`. It can add books, add patrons, check out and return books.
4. **District**: Represents a district encompassing multiple libraries. It has a list of `libraries` and can provide information about all books and patrons in the district.

The implementation order of these classes should be as follows:

1. Book
2. Patron
3. Library
4. District

Each class interconnects with the others. A `Patron` can check out a `Book` from a `Library`, and a `Library` can add a `Patron`. Meanwhile, a `District` can have multiple `Library` instances, each containing multiple `Patron` and `Book` instances.

By the end of the project, we aim to create an interactive system that mimics the workings of an actual district-wide library system. As you proceed with this project, remember to test your code after each class is completed to ensure everything is working as expected.
