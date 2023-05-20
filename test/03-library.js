const chai = require("chai");
const expect = chai.expect;
const Library = require("../classes/library.js");
const Patron = require("../classes/patron.js");
const Book = require("../classes/book.js");

describe("Library", () => {
	let library, patron1, patron2, book1, book2;

	beforeEach(() => {
		library = new Library("Library 1", "City 1", 100);
		patron1 = new Patron(1, "John", "Doe");
		patron2 = new Patron(2, "Jane", "Doe");
		book1 = new Book(1, "Book 1", "Author 1");
		book2 = new Book(2, "Book 2", "Author 2");
	});

	it("should correctly add patrons", () => {
		library.addPatron(patron1);
		library.addPatron(patron2);
		expect(library.patrons).to.have.members([patron1, patron2]);
	});

	it("should correctly add books", () => {
		library.addBooks(book1, book2);
		expect(library.booksInventory).to.have.members([book1, book2]);
	});

	it("should correctly checkout books", () => {
		library.addBooks(book1, book2);
		library.checkOutBooks(patron1, book1, book2);
		expect(library.checkedOutBooks).to.have.members([book1, book2]);
		expect(book1.checkedOut).to.be.true;
		expect(book2.checkedOut).to.be.true;
	});

	it("should correctly return books", () => {
		library.addBooks(book1, book2);
		library.checkOutBooks(patron1, book1, book2);
		library.returnBooks(patron1, book1);
		expect(library.checkedOutBooks).to.not.include(book1);
		expect(book1.checkedOut).to.be.false;
	});

	it("should correctly report book availability", () => {
		library.addBooks(book1);
		expect(library.hasBook(book1)).to.be.true;
		expect(library.hasBook(book2)).to.be.false;
	});

	it("should correctly report inventory size and status", () => {
		library.addBooks(book1, book2);
		expect(library.getInventorySize()).to.equal(2);
		expect(library.getInventoryStatus()).to.equal("2/100");
	});
});
