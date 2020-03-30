import React, { Component } from 'react';
import TopNav from '../TopNav';
import MenuNav from '../MenuNav';
import Banner from '../Banner';
import CatNav from '../CatNav';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <TopNav />
                    <MenuNav />
                    <Banner />        
                </div>
                <CatNav />
            </div>
        );
    }
}
