'use strict';

import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';

import { ContextBuilder } from './Context';

import ChatExampleData from './utils/ChatExampleData';

import App from './components/App';
import InterfaceHome from './components/Interfaces/Home';
import InterfaceChat from './components/Interfaces/Chat';

require('../styles/main.sass');

// Building stores, actions and other services
const { Context, Services } = ContextBuilder();

// Initializing adapters
ChatExampleData.init(); // load example data into localstorage
Services.webapiutils.getAllMessages();

const Interfaces = (
    <Route name="home" path="/" handler={App}>
        <DefaultRoute handler={InterfaceHome} />
        <Route name="chat" path="/chat" handler={InterfaceChat} />
    </Route>
);

Router.run(
    Interfaces,
    RouteHandler => React.render(
        (<Context
            messagestore={Services.messagestore}
            threadstore={Services.threadstore}
            unreadthreadstore={Services.unreadthreadstore}
            messageactions={Services.messageactions}
            serveractions={Services.serveractions}
            threadactions={Services.threadactions}
            messageutils={Services.messageutils}
            webapiutils={Services.webapiutils}
            render={() => <RouteHandler /> } />
        ),
        document.getElementById('app')
    )
);

