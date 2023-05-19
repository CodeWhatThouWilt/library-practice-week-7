const District = require("./district.js");

class Library {
	constructor(name, city, maxbooks, patrons, books = []) {
		this.name = name;
		this.city = city;
		this.maxbooks = maxbooks;
		this.patrons = patrons || 0;
		this.books = books || [];
		this.bookCount = books.length;
	}
}
