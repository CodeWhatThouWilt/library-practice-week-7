class District {
	static libraries = [];

	static addLibrary(library) {
		if (library) {
			District.libraries.push(library);
		}
	}

	static getAllPatrons() {
		const patrons = [];

		District.libraries.forEach((library) => {
			patrons.push(...library.patrons);
		});
		console.log("patrons", patrons);
		return patrons;
	}

	static countAllPatrons() {
		return District.getAllPatrons().length;
	}

	static getAllBooks() {
		const books = [];

		District.libraries.forEach((library) => {
			books.push(...library.booksInventory);
		});
		return books;
	}

	static countAllBooks() {
		return District.getAllBooks().length;
	}
}
