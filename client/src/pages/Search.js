import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  constructor() {
    super();

    // This binding is necessary to make `this` work in the callback
    this.handleSaveBook = this.handleSaveBook.bind(this);

    this.state = {
      books: [],
      bookSearch: "react",
      title: "",
      authors: "",
      description: "",
      link: "",
      thumbnail: "",
      key: "",
     
    };
  }

  // When this component mounts, search for the book "P is for Potty"
  componentDidMount() {
    // https://www.googleapis.com/books/v1/volumes?q=p+is+for+potty
    //not sure why this renders as https://www.googleapis.com/books/v1/volumes?query=react 
    API.searchBooks({ q: this.state.bookSearch })
    .then(res => {
      console.log(res.items);
      this.setState({ books: res.items });
    })
    .catch(err => console.log(err));
  }

  searchBooks = query => {
    API.searchBooks({q: query})
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();

    // console.log(
    //   "handleFormSubmit in client/src/app.js captured this user input " +
    //     this.state.bookSearch
    // );
    API.searchBooks({ q: this.state.bookSearch })
      .then(res => {
        console.log(res.items);
        this.setState({ books: res.items });
      })
      .catch(err => console.log(err));
  };

  handleSaveBook = (bookData) => {
    // event.preventDefault();
    console.log("Button clicked");
    console.log(bookData);//why doesn't bookdata include the key?
    // const { title, authors, description, link, thumbnail } = book;

    // console.log("handleSaveBook will save this book: " + bookData)
    const newBook = {
      //I have book data in books
      id: bookData.id,
      title: bookData.title,
      authors:  bookData.authors,
      description:  bookData.description,
      link: bookData.link,
      thumbnail: bookData.thumbnail
    };
    
    console.log(newBook.authors);
    const authorstring= newBook.authors.slice().join(", ");
    console.log(authorstring);
    API.saveBook({
      //I have book data in books
      "book_id": bookData.id,
      "title": bookData.title,
      "authors":  authorstring,//How do I splice the array and join with comma?
      "description":  bookData.description,
      "link": bookData.link,
      "thumbnail": bookData.thumbnail
    })
      // .then(res => this.loadBooks())
      .then(console.log("saveBook would like to to save this book" ))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
              <br />
              <hr />
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <div>
                      <BookListItem
                        key={book.volumeInfo.industryIdentifiers[0].identifier}
                        book_id={book.volumeInfo.industryIdentifiers[0].identifier}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        // How do I slice the array and join with a comma?
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        handleSaveBook={this.handleSaveBook}
                        
                      />
                     
                      </div>
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
