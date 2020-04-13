import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: "",
    location: "",
    sortBy: "best_match",
  };

  sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  getSortByClass = (sortByOption) => {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange = (sortByOption) => {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  handleSearch = (event) => {
    this.props.search(this.state.term, this.state.location, this.state.sortBy)
    event.preventDefault()
  }

  renderSortByOptions = () => {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={() => this.handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sortOptions">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Business" onChange={this.handleTermChange}></input>
          <input placeholder="Where?" onChange={this.handleLocationChange}></input>
        </div>
        <div className="SearchBar-submit">
          <a href="#" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
