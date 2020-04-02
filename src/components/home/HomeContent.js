import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HotProductList from '../../containers/home/HotProductList';
import PopularProductList from '../../containers/home/PopularProductList';
import CatNav from '../../containers/home/CatNav';

class HomeContent extends Component {
    render() {
        return (
            <>
                <CatNav/>
                <div className="home-content">
                    <Container>
                        <HotProductList/>
                        <br />
                        <PopularProductList/>
                    </Container>
                </div>
            </>


        );
    }
}

export default HomeContent;