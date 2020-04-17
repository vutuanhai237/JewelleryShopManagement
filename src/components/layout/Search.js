import React, { Component } from 'react';
import TopNav from '../TopNav';
import { Container } from 'react-bootstrap';
import SearchResult from '../search/SearchResultsList';
import SearchResultContent from '../../containers/search/SearchResultContent';
import PropTypes from 'prop-types';

class Search extends Component {
    render() {
        return (
            <>
                <TopNav />
                <Container>
                    <SearchResultContent keyword={this.props.keyword} />
                </Container>
            </>
        );
    }
}

Search.propTypes = {
    keyword: PropTypes.string,
}

export default Search;