import React, { Component } from "react";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav";

class Saved extends Component {
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
      key: ""
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
    API.searchBooks({ q: query })
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

  handleSaveBook = event => {
    // event.preventDefault();
    console.log("Button clicked");

    // const { title, authors, description, link, thumbnail } = book;

    console.log("handleSaveBook will save this book: " + this.state);
    const newBook = {
      //I have book data in books
      id: this.id,
      title: this.title,
      authors: this.authors,
      description: this.description,
      link: this.link,
      thumbnail: this.thumbnail
    };
    API.saveBook(newBook)
      // .then(res => this.loadBooks())
      .then(console.log("saveBook would like to to save this book" + newBook))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Container>
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
                          key={book.id}
                          title={book.volumeInfo.title}
                          link={book.volumeInfo.infoLink}
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

export default Saved;
