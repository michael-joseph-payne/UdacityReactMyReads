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
    BooksAPI.getAll().then((books) => {this.setState({
      bookList: books
    })});
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => {
      	  return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelf />
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
