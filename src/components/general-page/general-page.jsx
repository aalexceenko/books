import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import BookList from "../book-list/book-list";
import Sort from "../sort/sort";
import {Link} from 'react-router-dom';
import {bookType} from '../../types/book';


const GeneralPage = ({books, onBookCardClick, onDeleted, onSortBook}) => {

  return (
    <React.Fragment>
      <Header />


      <main className="main">
        <nav className="main-navigation">
          <div className="main-navigation__items">
            <Sort onSortBook={onSortBook} />
          </div>
          <Link to={`/add-book`} className="main-navigation__additional">Add</Link>
        </nav>

        <section className="books">
          <section className="books-list">
            <h2 className="books-list__title visually-hidden">All movies. Upcoming</h2>

            <BookList books={books} onBookCardClick={onBookCardClick} onDeleted={onDeleted} />



          </section>

        </section>
      </main>


      <Footer books={books} />
    </React.Fragment>

  );

};

GeneralPage.propTypes = {
  books: PropTypes.arrayOf(bookType).isRequired,
  onBookCardClick: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onSortBook: PropTypes.func.isRequired,
};


export default GeneralPage;