import React from "react";
import BookCard from "../book-card/book-card";
import PropTypes from "prop-types";
import {bookType} from '../../types/book';

const BookList = ({books, onBookCardClick, onDeleted}) => {

  return (
    <div className="books-list__container">

      {books.map((book) => (
        <BookCard 
          key={book.id}
          book={book}
          onDeleted={() => onDeleted(book.id)}
          onBookCardClick={onBookCardClick}
          />
      ))}
    </div>
  )
};

BookList.propTypes = {
  books: PropTypes.arrayOf(bookType).isRequired,
  onBookCardClick: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
};


export default BookList;