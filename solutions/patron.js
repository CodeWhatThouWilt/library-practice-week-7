class Patron {
	constructor(id, firstName, lastName) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.checkedOutBooks = {};
	}

	checkOutBooks(...books) {
		books.forEach((book) => (this.checkedOutBooks[book.id] = book));
	}

	returnBooks(...books) {
		books.forEach((book) => delete this.checkedOutBooks[book.id]);
	}

	getBooksCheckedOut() {
		return Object.values(this.checkedOutBooks);
	}
}
