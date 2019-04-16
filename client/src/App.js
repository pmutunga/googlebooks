import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  // When this component mounts, search for the book "P is for Potty"
  componentDidMount() {
    let query = "P is for Potty";
    API.searchBooks(query)
      .then(res => {
               this.setState({ books: res.data.items});
      })
      .catch(err => console.log(err));
  }

  searchBooks = query => {
    API.searchBooks(query)
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
    API.searchBooks(this.state.bookSearch)
      .then(res => {
        // console.log(res.data.items);
        var bookSearchResults = res.data.items;
        // console.log(bookSearchResults);
        console.log(bookSearchResults.length);
        for (var i = 0; i < bookSearchResults.length; i++) {
          let authorexist = !!bookSearchResults[i].volumeInfo.authors;
          let authors = authorexist? bookSearchResults[i].volumeInfo.authors.join(", "):"no authors found";
          console.log("Authors: " + authors);
          console.log("Description: " + bookSearchResults[i].volumeInfo.description);
          console.log("Image: " + bookSearchResults[i].volumeInfo.imageLinks.thumbnail);
          console.log("Href: " + bookSearchResults[i].volumeInfo.infoLink);
          console.log("==========================================");
        }
        this.setState({ books: res.data.items});
      })
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
                      <BookListItem
                        key={book.id}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                      />
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

export default App;
