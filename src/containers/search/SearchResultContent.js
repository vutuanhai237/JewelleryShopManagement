import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchResultList from '../../components/search/SearchResultsList';
import fetchSearchResult from '../../services/homeApi';
import { withRouter } from 'react-router';
import { Container, Spinner } from 'react-bootstrap';

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
            <div className="search-result text-center">
                <h4 className="not-found">Không tìm thấy sản phẩm nào liên quan đến "{this.props.keyword}"</h4>
                <a href="/" style={{ color: "#0000ff" }}>Trở về Trang chủ</a>
            </div>
        );
    }

    resultLoading() {
        return (
            <div className="search-result text-center">
                <div className="center-content">
                    <Spinner animation="grow" variant="danger" className="d-flexmy-2" />
                </div>

            </div>
        );
    }

    render() {
        const { results, loading, keyword } = this.props;
        if (loading)
            return this.resultLoading();
        if (results === undefined || results.length === 0)
            return this.resultNotFound();
        return (
            <>
                <Container className="mt-5 mb-3">
                    <h4 className="mx-lg-5">
                        Kết quả tìm kiếm cho "{keyword}":
                    </h4>
                </Container>
                <SearchResultList items={results} />
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultContent));