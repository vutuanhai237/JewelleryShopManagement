import React, { Component } from 'react';
import TopNav from '../TopNav';
import { Container } from 'react-bootstrap';
import SearchResult from '../search/SearchResult';

class Search extends Component {
    render() {
        return (
            <>
                <TopNav />
                <Container>
                    <SearchResult/>
                </Container>
            </>
        );
    }
}

export default Search;