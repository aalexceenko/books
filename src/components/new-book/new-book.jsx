import React from "react";
import browserHistory from "../../browser-history";
import { nanoid } from 'nanoid';
import Header from "../header/header";


class NewBook extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      authors: '',
      previewImage: ``,
      pages: '',
      company: '',
      year: '',
      releaseYear: '',
      description: '',
      isbn: '',
    }

  }

  handleTitleChange = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }

  handleAuthorsChange = (evt) => {
    this.setState({
      authors: evt.target.value
    })
  }

  handlePagesChange = (evt) => {
    this.setState({
      pages: evt.target.value
    })
  }

  handleCompanyChange = (evt) => {
    this.setState({
      company: evt.target.value
    })
  }

  handleYearChange = (evt) => {
    this.setState({
      year: evt.target.value
    })
  }

  handleReleaseYearChange = (evt) => {
    this.setState({
      releaseYear: evt.target.value
    })
  }

  handleDescriptionChange = (evt) => {
    this.setState({
      description: evt.target.value
    })
  }

  handleISBNChange = (evt) => {
    this.setState({
      isbn: evt.target.value
    })
  }

  handlePreviewImageChange = (evt) => {
    this.setState({
      previewImage: evt.target.value
    })
  }


  render() {
    const {title, authors, pages, company, year, releaseYear, description, isbn, previewImage} = this.state;
    const {addItem} = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className="book-form">
          <form action="" onSubmit={(evt) => {
            evt.preventDefault();
            addItem(
              {
                id: nanoid(),
                previewImage: this.state.previewImage,
                title: this.state.title,
                authors: this.state.authors,
                pages: this.state.pages,
                company: this.state.company,
                year: this.state.year,
                releaseYear: this.state.releaseYear,
                description: this.state.description,
                isbn: this.state.isbn,
              },
            );
            browserHistory.push("/");
          }}>

          <fieldset className="book-form__element book-form__element--wide">
            <label className="book-form__label" htmlFor="title">Заголовок</label>
            <input className="book-form__input" id="title" value={title} name="title" type="text" placeholder="" onChange={this.handleTitleChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide">
            <label className="book-form__label" htmlFor="previewImage">Картинка</label>
            <input className="book-form__input" id="previewImage" value={previewImage} name="previewImage" type="text" placeholder="" onChange={this.handlePreviewImageChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide" >
            <label className="book-form__label" htmlFor="authors">Автор</label>
            <input className="book-form__input" id="authors" value={authors} name="authors" type="text" placeholder="" onChange={this.handleAuthorsChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide" >
            <label className="book-form__label" htmlFor="description">Описание</label>
            <input className="book-form__input" id="description" value={description} name="description" type="text" placeholder="" onChange={this.handleDescriptionChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide" >
            <label className="book-form__label" htmlFor="pages">Объем</label>
            <input className="book-form__input" id="pages" value={pages} name="pages" type="text" placeholder="" onChange={this.handlePagesChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide" >
            <label className="book-form__label" htmlFor="company">Издательство</label>
            <input className="book-form__input" id="company" value={company} name="company" type="text" placeholder="" onChange={this.handleCompanyChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide" >
            <label className="book-form__label" htmlFor="year">Дата написания</label>
            <input className="book-form__input" id="year" value={year} name="year" type="text" placeholder="" onChange={this.handleYearChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide" >
            <label className="book-form__label" htmlFor="releaseYear">Дата выхода</label>
            <input className="book-form__input" id="releaseYear" value={releaseYear} name="releaseYear" type="text" placeholder="" onChange={this.handleReleaseYearChange} />
          </fieldset>

          <fieldset className="book-form__element book-form__element--wide" >
            <label className="book-form__label" htmlFor="isbn">ISBN</label>
            <input className="book-form__input" id="isbn" value={isbn} name="isbn" type="text" placeholder="" onChange={this.handleISBNChange} />
          </fieldset>

          <div className="add-review__submit">
            <button className="book-form__btn" type="submit">Сохранить</button>
          </div>


          </form>
        </div>
  
      </React.Fragment>
    );
  }


};


export default NewBook;
