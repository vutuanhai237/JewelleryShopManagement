import React from 'react';
import TopNav from '../TopNav';
import WarehouseNav from '../warehouse/WarehouseNav';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Products from '../../containers/warehouse/Products';

const useQuery = () =>
    new URLSearchParams(useLocation().search);


const Warehouse = (props) => {
    let query = useQuery();
    console.log(query);
    return (
        <div className="head" style={{ height: '100vh', overflowY: 'scroll' }}>
            <BrowserRouter forceRefresh>
                <TopNav {...props}/>
                <WarehouseNav className="mt-5" />
                <Switch>
                    <Route exact path="/warehouse/product-list">
                        <Products page={query.get('page')} search={query.get('q')} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Warehouse;