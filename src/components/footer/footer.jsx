import React from "react";
import PropTypes from "prop-types";
import {bookType} from '../../types/book';

const Footer = ({books}) => {

  return (
    <React.Fragment>
      <footer className="footer">
        <section className="footer__logo logo logo--smaller">Library</section>
        <section className="footer__statistics">
          <p>{books.length} books inside</p>
        </section>
      </footer>
    </React.Fragment>
  );
};

Footer.propTypes = {
  books: PropTypes.arrayOf(bookType).isRequired,
};

export default Footer;