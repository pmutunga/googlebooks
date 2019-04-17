import React, { Component } from "react";

import API from "../utils/API";
import DeleteButton from "../components/DeleteButton";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav";
import SaveButton from "../components/SaveButton";

class Saved extends Component {
  state = {
    books: []
  };

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
      <Nav/>
   <h1> Heloo World!</h1>
   <SaveButton />
   <DeleteButton />
   </div>
    );
  }
}

export default Saved;
