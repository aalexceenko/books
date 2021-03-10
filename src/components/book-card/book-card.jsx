import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {gerArrFormat} from "../../utils";
import {bookType} from '../../types/book';

const MAX_DESCRIPTION_LENGTH = 50;


const BookCard = ({book, onDeleted}) => {

  const {previewImage, title, authors, year, description, id} = book;

  let descriptionText = description ? description : ``;
  if (descriptionText.length > MAX_DESCRIPTION_LENGTH) {
    descriptionText = descriptionText.slice(0, MAX_DESCRIPTION_LENGTH - 1) + `…`;
  }


  return (
    <article className="book-card">
      <Link className="book-card__title" to={`/books/${id}`}>{title}</Link>

      <div className="book-card__info">
        <p className="book-card__year">Автор: {gerArrFormat(authors)}</p>
        <p className="book-card__year">Дата написания: {year}</p>
        <p className="book-card__year">{descriptionText}</p>


      </div>
      <img src={previewImage} alt="" className="book-card__poster" />
      <div className="book-card__controls">

        <button className="book-card__controls-btn"
          onClick={onDeleted}>Удалить</button>

      </div>
    </article>
  )
};

BookCard.propTypes = {
  book: bookType,
  onDeleted: PropTypes.func.isRequired,
};

export default BookCard;
