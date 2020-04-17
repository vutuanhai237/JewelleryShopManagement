import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from './SearchResultItem';
import './SearchResult.scss';

class SearchResultList extends Component {

    render() {
        const { items } = this.props;
        return (
            <div className="search-result">
                {
                    items.map(item => {
                        return (
                            <SearchResultItem key={item.idsp} item={item} />
                        );
                    })
                }
            </div>
        );
    }
}

SearchResultList.propTypes = {
    items: PropTypes.array,
};

export default SearchResultList;