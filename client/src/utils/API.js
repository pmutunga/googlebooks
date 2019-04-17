import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // The searchBooks method retrieves books from googlebooks
// It accepts the baseurl and a "query" or term to search the google api
  searchBooks: function(query) {
    return axios.get(BASEURL + query);//question for TA do I need to specify the route /api/books?
  },
   // Gets all books from the database
  getBooks: function() {
    return axios("/api/saved");
  },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/saved/" + id);
    },
   // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved", bookData);
  },
   // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("api/saved/" + id)
  }
};