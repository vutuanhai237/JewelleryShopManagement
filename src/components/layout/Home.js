import React, { Component } from 'react';
import TopNav from '../TopNav';
import MenuNav from '../MenuNav';
import Banner from '../Banner';
export default class Home extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <MenuNav/>
                <Banner/>
            </div>
        );
    }
}
