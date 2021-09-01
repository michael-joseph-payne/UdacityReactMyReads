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

  render() {
    console.log(this.state.bookList);
    
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
    			/>
            	<Shelf
    			  title='Want to Read'
    			  list={wantToRead}
    			/>
            	<Shelf
    			  title='Read'
    			  list={read}
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
		<Route path='/search' component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
