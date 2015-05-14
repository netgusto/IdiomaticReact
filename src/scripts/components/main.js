'use strict';

import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import { ContextFactory } from 'geiger';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

import App from './App';
import InterfaceHome from './Interfaces/Home';
import InterfaceTodos from './Interfaces/Todos';


require('../../styles/main.sass');

// Declaring our App Context
const Context = ContextFactory({
    user: React.PropTypes.object.isRequired,
    todostore: React.PropTypes.object.isRequired,
    todoactions: React.PropTypes.object.isRequired
});

// Fetching app config variables from the HTML page
const config = JSON.parse(window.unescape(document.getElementsByName('config/app')[0].content));

// Building Actions and Stores
const todoactions = new TodoActions({ apiendpoint: config.apiendpoint });
const todostore = new TodoStore({ actions: todoactions });

const Interfaces = (
    <Route name="home" path="/" handler={App}>
        <DefaultRoute handler={InterfaceHome} />
        <Route name="rest" path="/rest" handler={InterfaceTodos} />
    </Route>
);

Router.run(
    Interfaces,
    RouteHandler => React.render((
        <Context user={config.user} todostore={todostore} todoactions={todoactions}>
        {/* Setting depencies in the context */}
            <RouteHandler />
            {/* Displaying the interface passed by the router */}
        </Context>),
        document.getElementById('app')
    )
);
