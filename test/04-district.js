const chai = require("chai");
const expect = chai.expect;
const District = require("../classes/district.js");
const Library = require("../classes/library.js");
const Patron = require("../classes/patron.js");
const Book = require("../classes/book.js");

describe("District", () => {
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

	it("should correctly add libraries", () => {
		expect(District.libraries).to.have.members([library1, library2]);
	});

	it("should correctly get and count all patrons", () => {
		const allPatrons = District.getAllPatrons();
		expect(allPatrons).to.have.members([patron1, patron2]);
		expect(District.countAllPatrons()).to.equal(2);
	});

	it("should correctly get and count all books", () => {
		const allBooks = District.getAllBooks();
		expect(allBooks).to.have.members([book1, book2]);
		expect(District.countAllBooks()).to.equal(2);
	});
});
