// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { QuoteOfTheDayPage } from '../pages/QuoteOfTheDayPage';
import { FavoriteQuotesPage } from '../pages/FavoriteQuotesPage';
import { QuotesPage } from '../pages/QuotesPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <nav className='menu'>
                <ul>
                    <li><NavLink to='/' exact={true}>QOD</NavLink></li>
                    <li><NavLink to='/search'>SEARCH</NavLink></li>
                    <li><NavLink to='/favourites'>FAV</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/' component={QuoteOfTheDayPage} exact={true} />
                <Route path='/favourites' component={FavoriteQuotesPage} />
                <Route path='/search' component={QuotesPage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);