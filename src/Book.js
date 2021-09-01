import React from 'react';

class Book extends React.Component {
  render() {
    const backgroundImage = this.props.book.imageLinks.smallThumbnail;
    const title = this.props.book.title;
    const authors = this.props.book.authors;
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${backgroundImage})` }}>
		  </div>
		  <div className="book-shelf-changer">
		    <select>
			  <option value="move" disabled>Move to...</option>
			  <option value="currentlyReading">Currently Reading</option>
			  <option value="wantToRead">Want to Read</option>
			  <option value="read">Read</option>
			  <option value="none">None</option>
			</select>
		  </div>
		</div>
		<div className="book-title">{title}</div>
		<div className="book-authors">
        {authors.map((author, index) => {
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