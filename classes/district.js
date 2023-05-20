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
		// return District.libraries.flatMap((library) => library.patrons);
	}

	static countAllPatrons() {
		return District.getAllPatrons().length;
	}

	static getAllBooks() {
		return District.libraries.flatMap((library) => library.booksInventory);
	}

	static countAllBooks() {
		return District.getAllBooks().length;
	}
}

module.exports = District;
