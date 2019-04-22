import React, { Component } from "react";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav";

class Saved extends Component {

   state = {
      books: []
    };
  
  // When this component mounts, sload all books"
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
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
                          key={book.book_}
                          title={book.title}
                          link={book.link}
                          authors={book.authors}
                          description={book.description}
                          thumbnail={book.thumbnail}
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
