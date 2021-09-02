import React from 'react';
import Book from './Book.js';

class Shelf extends React.Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
      	  <div className="bookshelf-books">
      		<ol className="books-grid">
			  {this.props.list.map((book) => {
                return (
                  <li key={book.id}>
                    <Book book={book} changeShelves={this.props.changeShelves} />
                  </li>
                )
              })}
      		</ol>
      	  </div>
        </div>
      </div>      
    )
  }
}

export default Shelf;