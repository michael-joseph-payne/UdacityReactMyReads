import React from 'react';

class Book extends React.Component {
  render() {
    const backgroundImage = this.props.book.imageLinks.smallThumbnail;
    console.log(backgroundImage);
    
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
		<div className="book-title">The Adventures of Tom Sawyer</div>
		<div className="book-authors">Mark Twain</div>
	  </div>
    )
  }
}

export default Book;