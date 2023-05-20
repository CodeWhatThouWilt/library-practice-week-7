const chai = require("chai");
const expect = chai.expect;

const Patron = require("../classes/patron.js");

describe("Patron", () => {
	let patron, book1, book2;

	beforeEach(() => {
		patron = new Patron(1, "John", "Doe");
		book1 = { id: 1, title: "Book 1", author: "Author 1" };
		book2 = { id: 2, title: "Book 2", author: "Author 2" };
	});

	it("should check out books correctly", () => {
		patron.checkOutBooks(book1, book2);
		expect(Object.keys(patron.checkedOutBooks)).to.have.members(["1", "2"]);
	});

	it("should return books correctly", () => {
		patron.checkOutBooks(book1, book2);
		patron.returnBooks(book1);
		expect(Object.keys(patron.checkedOutBooks)).to.not.include("1");
	});

	it("should return a list of checked out books", () => {
		patron.checkOutBooks(book1, book2);
		const checkedOutBooks = patron.getBooksCheckedOut();
		expect(checkedOutBooks).to.include.members([book1, book2]);
	});
});
