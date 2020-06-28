import React, { Component } from 'react';
import TopNav from '../TopNav';
import { Container } from 'react-bootstrap';
import SearchResultContent from '../../containers/search/SearchResultContent';
import PropTypes from 'prop-types';

class Search extends Component {
    render() {
        return (
            <div>
                <TopNav {...props}/>
                <Container>
                    <SearchResultContent keyword={this.props.keyword} />
                </Container>
            </div>
        );
    }
}

Search.propTypes = {
    keyword: PropTypes.string,
}

export default Search;