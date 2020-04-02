import React, { Component } from 'react';
import TopNav from '../TopNav';
import MenuNav from '../MenuNav';
import Banner from '../home/Banner';

import HomeContent from '../home/HomeContent';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <TopNav />
                    <MenuNav />
                    <Banner />        
                </div>
                <HomeContent/>
            </div>
        );
    }
}
