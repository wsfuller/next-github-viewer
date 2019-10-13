import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  onChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <form action="/search" method="get">
        <input
          type="search"
          onChange={this.onChange}
          name="q"
          ref="search"
          placeholder="Search..."
        />
        <button type="button" onClick={() => (this.refs.search.value = "")}>
          Clear
        </button>
        <button type="submit" id="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
