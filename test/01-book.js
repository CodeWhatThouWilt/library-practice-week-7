const chai = require("chai");
const expect = chai.expect;

const Book = require("../classes/book.js");

describe("Book", () => {
	let book;

	beforeEach(() => {
		book = new Book(1, "Book 1", "Author 1");
	});

	it("should have correct properties after construction", () => {
		expect(book.id).to.equal(1);
		expect(book.title).to.equal("Book 1");
		expect(book.author).to.equal("Author 1");
		expect(book.checkedOut).to.be.false;
	});
});
