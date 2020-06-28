import React, { Component } from 'react';
import TopNav from '../TopNav';
import MenuNav from '../MenuNav';
import PriceNav from '../PriceNav';
import Banner from '../home/Banner';
import HomeContent from '../home/HomeContent';
import Footer from '../Footer';
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="head">
                    <TopNav {...this.props} />
                    <MenuNav />
                    <PriceNav />
                    <Banner />
                </div>
                <HomeContent />
                <Footer />
            </div>
        );
    }
}
