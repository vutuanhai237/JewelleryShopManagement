import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HotProductList from '../../containers/home/HotProductList';
import PopularProductList from '../../containers/home/PopularProductList'
import HomeCatNav from '../../containers/home/HomeCatNav';

class HomeContent extends Component {
    render() {
        return (
            <>
                <HomeCatNav/>
                <div className="home-content">
                    <Container>
                        <HotProductList/>
                        <br />
                        <PopularProductList/>
                        <h4>Giá vàng hiện tại</h4>
                        <iframe className="w-100 mh-100" height="400px" frameBorder="0" src="https://tygia.com/api.php?cols=1&title=0&chart=1&gold=1&rate=0&expand=0&color=FFFFFF&titlecolor=333333&nganhang=VIETCOM&fontsize=80&change=1&css=%23SJC_N_ng{display:%20table-row%20!important;}#amp=1"/>
                    </Container>
                </div>
            </>


        );
    }
}

export default HomeContent;