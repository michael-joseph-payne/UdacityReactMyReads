import React from 'react';

import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      queryResults: []
    };
  }
  
  handleChange = (event) => {
    this.setState({query: event.target.value}, () => {this.search()});
  }
  
  search() {
    if(this.state.query) {
	  BooksAPI.search(this.state.query, 20).then((response) => {
        if(response) {
          this.setState({queryResults: response});
        } else {
          this.setState({queryResults: []});
        }
      }).catch(() => {
        this.setState({queryResults: []});
      });
    }
  }
  
  render() {
    return (
      <div className="search-books">
        <SearchBar value={this.state.query} change={this.handleChange} />
  		<SearchResults queryResults={this.state.queryResults} changeShelves={this.props.changeShelves} />
      </div>
  )}
}

export default SearchPage;