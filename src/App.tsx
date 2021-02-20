import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {EmployeesPage} from './EmployeesPage/EmployeesPage';
import {HomePage} from './HomePage/HomePage';
import {Container} from '@material-ui/core';
import {Header} from './Header';

export const PATH = {
    HOME: '/home-page',
    EMPLOYEE: '/users-page',
}

export const App: React.FC = () => {

    return (
        <>
            <Header/>
            <Container maxWidth="sm">
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={PATH.HOME}/>}/>
                    <Route path={PATH.EMPLOYEE} render={() => <EmployeesPage/>}/>
                    <Route path={PATH.HOME} render={() => <HomePage/>}/>
                </Switch>
            </Container>
        </>
    )
}

