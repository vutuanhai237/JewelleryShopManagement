import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CatNavItem from './CatNavItem';

const CatNav = (props) => {
    const { catItems, className } = props;
    return (
        <div className={className}>
            <Container className="d-flex justify-content-center">
                <Nav className="cat-nav w-100" activeKey="/home">
                    {
                        catItems.map(item => {
                            return (
                                <CatNavItem key={item.id} active={item.active} href={item.href} onClick={item.onClick} img={item.img}>{item.label}</CatNavItem>
                            );
                        })
                    }

                </Nav>
            </Container>
        </div>
    );
}


CatNav.propTypes = {
    catItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,//key id
            img: PropTypes.img,//image url
            label: PropTypes.string.isRequired,//label
            onClick: PropTypes.func,//onClick function. ex: () => foo()
            href: PropTypes.string,//url
            active: PropTypes.bool,//true if the item is selected
        })
    ),
    className: PropTypes.string,
}





export default CatNav;