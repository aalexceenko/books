import React, { Component } from 'react';
import GeneralPage from "../general-page/general-page";
import BookScreen from "../book-screen/book-screen";
import browserHistory from "../../browser-history";
import NewBook from "../new-book/new-book";
import BookEditForm from "../book-edit-form/book-edit-form";

import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
 
class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      data: this.props.books.slice(),
    }

}

   deleteItem = (id) => {

    this.setState(({data}) => {

      const idx = data.findIndex((el) => el.id === id);
      const before = data.slice(0, idx);
      const after = data.slice(idx + 1);

      const newArray = [ ...before, ...after];

      return {
        data: newArray
      };

    });
  };

  addItem = (book) => {

    this.setState(({data}) => {
      const newArr = data.slice();
      newArr.push(
        book
      )
      return {
        data: newArr
      }
    })
  }

  updateItem = (updatingBook) => {

    this.setState(({data}) => {
      const bookIndex = data.findIndex((book) => book.id === updatingBook.id);

      const updatedBooks = [
        ...data.slice(0, bookIndex),
        updatingBook,
        ...data.slice(bookIndex + 1)
      ];

      return {
        data: updatedBooks
      }
    })
  }

  sortBook = (type) => {
    switch(type) {
      case "by_name":
        this.setState(({data}) => {

        return {
          data: data.slice().sort((a, b) => {
            return (a.title > b.title) - (a.title < b.title)
          })
        }
        
      })
      break;

      case "by_date":
        this.setState(({data}) => {

        return {
          data: data.slice().sort((a, b) => {
            return a.year - b.year
          })
        }

      })
      break;

      default:
        throw new Error("other type sort")
    }

  }


  render() {

    const {data} = this.state;
    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/"
            render={({history}) => {

              return (
              <GeneralPage
                books={data}
                onDeleted={this.deleteItem}
                onSortBook={this.sortBook}

                onBookCardClick={(id) => history.push(`/books/${id}`)}
                />
              )

            }}
          />
          <Route exact path="/books/:id"
            render={({match}) => (
              <BookScreen
                books={data}
                match={match}
              />
            )}
          />
          <Route exact path="/add-book"
            render={() => {
              return (
                <NewBook addItem={this.addItem}
                />
              )
            }

            }
          />
          <Route exact path="/books/:id/edit"
            render={({match}) => {
              const id = match.params.id;
              const currentBook = this.state.data.find((book) => book.id === id);
              return (
                <BookEditForm
                book={currentBook}
                updateItem={this.updateItem}
              />
              )

            }

            }
          />
        </Switch>
      </BrowserRouter>
  
    );
  }


};

export default App;