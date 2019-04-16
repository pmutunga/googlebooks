import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // The searchBooks method retrieves books from googlebooks
// It accepts the baseurl and a "query" or term to search the google api
  searchBooks: function(query) {
    return axios.get(BASEURL + query);//question for TA do I need to specify the route /api/books?
  },
  getBooks: function() {
    return axios("/api/books");
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("api/books/" + id)
  }
};