'use strict';

import React from 'react/addons';
import Router from 'react-router';
import FluxComponent from 'flummox/component';

import UINavbar from './UI/Navbar';

const RouteHandler = Router.RouteHandler;

let App = React.createClass({

    componentDidMount() { this.props.flux.getActions('todos').fetchTodos(); },

    render() {

        return (
            <div className='main container'>
                <FluxComponent {...this.props} connectToStores={['todos']}>
                    <UINavbar />
                    <RouteHandler />
                </FluxComponent>
            </div>
        );
    }
});

module.exports = App;
