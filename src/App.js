import React from 'react'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf.js';
import SearchPage from './SearchPage';

import './App.css'

class BooksApp extends React.Component {
  state = {
    bookList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({bookList: books})
    });
  }
  
  filterBookListByShelf(shelf) {
    let filteredBookList = [];
    for(const book of this.state.bookList) {
      if(book.shelf === shelf) {
        filteredBookList.push(book);
      }
    }
    return filteredBookList;
  }
  
  changeShelves = (book, shelf) => {
    let newBookList = this.state.bookList;
    let index = newBookList.findIndex((bookToFind) => bookToFind === book);
    
    if(index === -1) {
      newBookList = newBookList.concat(book);
      index = newBookList.findIndex((bookToFind) => bookToFind === book);
    }

    newBookList[index].shelf = shelf;
    
    BooksAPI.update(book, shelf).then(response => {
      this.setState({bookList: newBookList});
    });
  }

  render() {
    const currentlyReading = this.filterBookListByShelf('currentlyReading');
    const wantToRead = this.filterBookListByShelf('wantToRead');
    const read = this.filterBookListByShelf('read');
    
    return (
      <div className="app">
        <Route exact path='/' render={() => {
      	  return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelf
            	  title='Currently Reading'
            	  list={currentlyReading}
    			  changeShelves={this.changeShelves}
    			/>
            	<Shelf
    			  title='Want to Read'
    			  list={wantToRead}
    			  changeShelves={this.changeShelves}
    			/>
            	<Shelf
    			  title='Read'
    			  list={read}
    			  changeShelves={this.changeShelves}
    			/>
              </div>
              <div className="open-search">
                <Link
      			  to='/search'
  		        >Add a book</Link>
			  </div>
            </div>
          )
    	}} />
		<Route path='/search' render={() => {
          return (
            <SearchPage changeShelves={this.changeShelves} />
          )
        }} />
      </div>
    )
  }
}

export default BooksApp
