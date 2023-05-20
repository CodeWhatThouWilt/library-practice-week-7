class Library {
	constructor(name, city, maxInventory) {
		this.name = name;
		this.city = city;
		this.maxInventory = maxInventory;
		this.patrons = [];
		this.booksInventory = [];
		this.checkedOutBooks = [];
	}

	checkOutBooks(patron, ...books) {
		if (patron && books.length) {
			books.forEach((book) => {
				const index = this.booksInventory.indexOf(book);
				if (index > -1) {
					this.booksInventory.splice(index, 1);
					this.checkedOutBooks.push(book);
					book.checkedOut = true;
					patron.checkOutBooks(book);
				}
			});
		}
	}

	returnBooks(patron, ...books) {
		if (patron && books.length) {
			books.forEach((book) => {
				const index = this.checkedOutBooks.indexOf(book);
				if (index > -1) {
					this.checkedOutBooks.splice(index, 1);
					this.booksInventory.push(book);
					book.checkedOut = false;
					patron.returnBooks(book);
				}
			});
		}
	}

	addPatron(patron) {
		if (patron) {
			this.patrons.push(patron);
		}
	}

	addBooks(...books) {
		if (books.length) {
			books.forEach((book) => {
				if (this.booksInventory.length < this.maxInventory) {
					this.booksInventory.push(book);
				}
			});
		}
	}

	isBookCheckedOut(book) {
		return this.checkedOutBooks.includes(book);
	}

	hasBook(book) {
		return this.booksInventory.includes(book);
	}

	getInventorySize() {
		return this.booksInventory.length;
	}

	getInventoryStatus() {
		return `${this.getInventorySize()}/${this.maxInventory}`;
	}
}

module.exports = Library;
