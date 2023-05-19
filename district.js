class District {
	static bookCount = 0;
	static booksList = [];

	static libraryCount = 0;
	static libraryList = [];

	static patronCount = 0;
	static patronList = [];

	static addLibrary(library) {
		District.libraryCount++;
		District.libraryList.push(library);

		District.bookCount += library.bookCount;
		District.booksList = District.booksList.push(...library.booksList);
	}

	static removeLibrary(library) {
		District.libraryCount--;
	}

	static sendBook(library1, libary2) {
		library1.bookCount--;
	}
}

module.exports = District;
