import React, { Component } from 'react';
import { Navbar, Container, NavLink } from 'react-bootstrap';
import './TopNav.scss';



class PriceNav extends Component {
    constructor(props) {
        super(props);
        this.state = {

            xau: "🥇 XAU: " + 0,
            xag: "🥈 XAG: " + 0,
        }
    }
    componentDidMount() {

        this.fetchPrice();

    }
    fetchPrice() {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://www.metals-api.com/api/latest?access_key=5d21c2v6tl03n8dduqpoqp59tawb5u323pdd87l8unaecw6a3zn25ql6v8o7',
            headers: {

            }
        };

        axios(config)
            .then(response => {
                this.setState({
                    xau: "🥇 XAU: " + JSON.parse(JSON.stringify(response.data)).rates.XAU,
                    xag: "🥈 XAG: " + JSON.parse(JSON.stringify(response.data)).rates.XAG,
                })
            })
            .catch(error => {
                console.log(error);
            });

    }


    render() {
        return (
            <div className="top-nav d-none d-md-block">
                <Navbar className="bg-trans" variant="light">
                    <Container>
                        <ul className="list-inline list-unstyled">

                            <li className="list-inline-item text-uppercase"><NavLink>{this.state.xau}</NavLink></li>
                            
                            <li className="list-inline-item text-uppercase"><NavLink>{this.state.xag}</NavLink></li>
                   
                        </ul>

                    </Container>

                </Navbar>
            </div>
        );
    }
}

export default PriceNav;