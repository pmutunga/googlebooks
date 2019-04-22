import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";


// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  book_id,
  title,
  authors,
  description,
  link,
  handleSaveBook

}) 

{
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
          <button onClick={()=>{
            handleSaveBook({
            book_id,
            thumbnail,
            title,
            authors,
            description,
            link
            })

          }} className="save-btn btn btn-outline-primary justify-content-end">Save</button>
            <h3>{title}</h3>
            <p>Authors: {authors}</p>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Preview
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
