import React from 'react'

class ShelfSelector extends React.Component {
  render() {
    return (
      <select onChange={this.props.change} defaultValue={this.props.value}>
  		<option value="move" disabled>Move to...</option>
		<option value="currentlyReading">Currently Reading</option>
		<option value="wantToRead">Want to Read</option>
		<option value="read">Read</option>
		<option value="none">None</option>
	  </select>
    )
  }
}

export default ShelfSelector;