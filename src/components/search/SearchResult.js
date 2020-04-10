import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from './SearchResultItem';
import './SearchResult.scss';

class SearchResult extends Component {
    render() {
        return (
            <div className="search-result">
              <SearchResultItem />  
            </div>
        );
    }
}

SearchResult.propTypes = {

};

export default SearchResult;