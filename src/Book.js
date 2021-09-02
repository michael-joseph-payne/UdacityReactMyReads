import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    console.log('handleChange()');
    console.log(event.target.value);
    this.props.changeShelves(this.props.book, event.target.value);
  }
  
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}>
		  </div>
		  <div className="book-shelf-changer">
		    <select onChange={this.handleChange} defaultValue={this.props.book.shelf}>
			  <option value="move" disabled>Move to...</option>
			  <option value="currentlyReading">Currently Reading</option>
			  <option value="wantToRead">Want to Read</option>
			  <option value="read">Read</option>
			  <option value="none">None</option>
			</select>
		  </div>
		</div>
		<div className="book-title">{this.props.book.title}</div>
		<div className="book-authors">
        {this.props.book.authors.map((author, index) => {
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