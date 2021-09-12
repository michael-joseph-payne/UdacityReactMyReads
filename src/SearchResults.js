import React from 'react'

import Book from './Book';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
      	  {this.props.queryResults.map((book) => {
      		return (
              <li key={book.id}>
                <Book book={book} authors={[]} shelf={'none'} changeShelves={this.props.changeShelves} />
              </li>
            )
          })}
		</ol>
      </div>
    )
  }
}

export default SearchResults;