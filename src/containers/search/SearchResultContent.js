import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchResultList from '../../components/search/SearchResultsList';
import fetchSearchResult from '../../services/fetchSearchResult';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        results: state.search.results,
        loading: state.search.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSearchResult }, dispatch);
}

class SearchResultContent extends Component {

    componentDidMount() {
        const { fetchSearchResult, keyword } = this.props;
        fetchSearchResult(keyword);
    }

    resultNotFound() {
        return (
            <div className="search-result">
                <div className="not-found">Không tìm thấy sản phẩm</div>
            </div>
        );
    }

    resultLoading() {
        return (
            <div className="search-result">
                <div className="center-content">Đang tìm kiếm...</div>
            </div>
        );
    }

    render() {
        const { results, loading } = this.props;
        if (loading)
            return this.resultLoading();
        if (results === undefined || results.length === 0)
            return this.resultNotFound();
        return (
            <>
                <SearchResultList items={results} />
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultContent));