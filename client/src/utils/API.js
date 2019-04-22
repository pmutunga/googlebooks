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
    // return axios("/api/books/saved";
  },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/saved/" + id);
      // return axios.get("/api/books/" + id);
    },
   // Saves a book to the database
  saveBook: function(bookData) {
   console.log("API.js/saveBook sending bookData to booksController.js ");
    return axios.post("/api/saved", bookData);
  },
    // // Saves a book to the database
    // saveBook: (bookData)=> {
    //   return axios.post("/api/books/add", bookData);
    // },
   // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id)
    // return axios.delete("/api/books/delete/" + id);
  }
};