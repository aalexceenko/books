import React from "react";
import {Link} from 'react-router-dom';


class BookScreen extends React.Component {
  constructor(props) {
    super(props);

    const id = this.props.match.params.id;
    const currentBook = this.props.books.find((book) => book.id === id);  
  
    const {previewImage, title, authors, pages, company, year, releaseYear, description, isbn} = currentBook;

    this.state = {
      id,
      isEdit: false,
      title,
      previewImage,
      authors,
      pages,
      company,
      year,
      releaseYear,
      description,
      isbn,

      ...props
    }

    this.editBtnClick = this.editBtnClick.bind(this);

  }

  editBtnClick() {
    this.setState({isEdit: true})
  }


  render() {
  
    const {id, previewImage, title, authors, pages, company, year, releaseYear, description, isbn} = this.state;

    return (
  
      <div className="form-details__top-container">
        <div className="book-details__close">
          <Link to={`/books/${id}/edit`} type="button" className="book-card__controls-btn" onClick={this.editBtnClick}>Редактировать</Link>
        </div>
        <div className="book-details__info-wrap">
          <div className="book-details__poster">
            <img className="book-details__poster-img" src={previewImage} alt="" />
  
          </div>
  
          <div className="book-details__info">
            <div className="book-details__info-head">
              <div className="book-details__title-wrap">
              <h3 className="book-details__title">{title}</h3>

              </div>
  
            </div>
  
            <table className="book-details__table">
              <tbody>
                <tr className="book-details__row">
                  <td className="book-details__term">Автор</td>
                  <td className="book-details__cell">{authors}</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="book-details__row">
                  <td className="book-details__term">Описание</td>
                  <td className="book-details__cell">{description}</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="book-details__row">
                  <td className="book-details__term">Объем</td>
                  <td className="book-details__cell">{pages}</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="book-details__row">
                  <td className="book-details__term">Издательство</td>
                  <td className="book-details__cell">{company}</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="book-details__row">
                  <td className="book-details__term">Дата написания</td>
                  <td className="book-details__cell">{year}</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="book-details__row">
                  <td className="book-details__term">Дата выхода</td>
                  <td className="book-details__cell">{releaseYear}</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="book-details__row">
                  <td className="book-details__term">ISBN</td>
                  <td className="book-details__cell">{isbn}</td>
                </tr>
              </tbody>
            </table>
  
  
          </div>
        </div>
  
  
      </div>
    );
  }


};

export default BookScreen;