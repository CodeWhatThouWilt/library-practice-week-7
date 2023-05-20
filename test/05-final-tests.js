const chai = require("chai");
const expect = chai.expect;
const District = require("../classes/district.js");
const Library = require("../classes/library.js");
const Patron = require("../classes/patron.js");
const Book = require("../classes/book.js");

describe("Complete System", () => {
	let library1, library2, patron1, patron2, book1, book2;

	before(() => {
		library1 = new Library("Library 1", "City 1", 100);
		library2 = new Library("Library 2", "City 2", 100);

		District.addLibrary(library1);
		District.addLibrary(library2);

		patron1 = new Patron(1, "John", "Doe");
		patron2 = new Patron(2, "Jane", "Doe");

		book1 = new Book(1, "Book 1", "Author 1");
		book2 = new Book(2, "Book 2", "Author 2");

		library1.addPatron(patron1);
		library1.addBooks(book1);

		library2.addPatron(patron2);
		library2.addBooks(book2);
	});

	it("should correctly handle checking out and returning books", () => {
		library1.checkOutBooks(patron1, book1);
		expect(library1.checkedOutBooks).to.include(book1);
		expect(book1.checkedOut).to.be.true;
		library1.returnBooks(patron1, book1);
		expect(library1.checkedOutBooks).to.not.include(book1);
		expect(book1.checkedOut).to.be.false;
	});

	it("should correctly handle patrons and books across libraries", () => {
		const allPatrons = District.getAllPatrons();
		expect(allPatrons).to.have.members([patron1, patron2]);
		expect(District.countAllPatrons()).to.equal(2);
		const allBooks = District.getAllBooks();
		expect(allBooks).to.have.members([book1, book2]);
		expect(District.countAllBooks()).to.equal(2);
	});
});
