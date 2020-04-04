import React, { Component } from 'react';
import TopNav from '../TopNav';
import MenuNav from '../MenuNav';
import Banner from '../home/Banner';
import HomeContent from '../home/HomeContent';
import Footer from '../Footer';
export default class Home extends Component {
    render() {
        return (
            <div class="home">
                <div className="head">
                    <TopNav />
                    <MenuNav />
                    <Banner />        
                </div>
                <HomeContent/>
                <Footer/>
            </div>
        );
    }
}
