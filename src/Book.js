import React from 'react';

import ShelfSelector from './ShelfSelector';

class Book extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.props.changeShelves(this.props.book, event.target.value);
  }
  
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}>
		  </div>
		  <div className="book-shelf-changer">
            <ShelfSelector change={this.handleChange} value={this.props.shelf} />
		  </div>
		</div>
		<div className="book-title">{this.props.book.title}</div>
		<div className="book-authors">
        {this.props.authors.map((author, index) => {
          return (
            <div key={index} className="books-authors">
              {author}
            </div>
          )
        })}
        </div>
	  </div>
    )
  }
}

export default Book;