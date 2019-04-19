import axios from "axios";


export default {
  // The searchBooks method retrieves books from googlebooks
// It accepts the baseurl and a "query" or term to search the google api





  searchBooks: function(query) {
   return axios
    .get("https://www.googleapis.com/books/v1/volumes", {
      params: query
    })
    .then(results => (results.data))

  },
   // Gets all books from the database
  getBooks: function() {
    return axios("/api/saved");
  },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/saved" + id);
    },
   // Saves a book to the database
  saveBook: function(bookData) {
    console.log("API.js/saveBook: " + bookData);
    return axios.post("/api/saved", bookData);
  },
   // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id)
  }
};