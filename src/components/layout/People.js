import React from 'react';
import TopNav from '../TopNav';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Employees from '../../containers/people/Employees';
import PeopleNav from '../people/PeopleNav';

const useQuery = () =>
    new URLSearchParams(useLocation().search);


const People = (props) => {
    let query = useQuery();
    return (
        <div className="head" style={{ height: '100vh', overflowY: 'scroll' }}>
            <BrowserRouter forceRefresh>
                <TopNav />
                <PeopleNav className="mt-5" />
                <Switch>
                    <Route exact path="/people/employee-list">
                        <Employees page={query.get('page')} search={query.get('q')} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default People;