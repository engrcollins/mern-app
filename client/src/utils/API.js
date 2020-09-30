import axios from 'axios';

export default {
	// Gets all books
	getBooks: function() {
		return axios.get('http://localhost:5000/api/books');
	},
	// Gets the book with the given id
	getBook: function(id) {
		return axios.get('http://localhost:50000/api/books/' + id);
	},
	// Deletes the book with the given id
	deleteBook: function(id) {
		return axios.delete('http://localhost:5000/api/books/' + id);
	},
	// Saves a book to the database
	saveBook: function(bookData) {
		return axios.post('http://localhost:5000/api/books', bookData);
	}
};
