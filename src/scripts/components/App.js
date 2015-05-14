'use strict';

import React from 'react/addons';
import { RouteHandler } from 'react-router';

import UINavbar from './UI/Navbar';

export default class App extends React.Component {

    static contextTypes = {
        todoactions: React.PropTypes.object.isRequired
    };

    componentDidMount() { this.context.todoactions.fetchTodos(); }

    render() {
        return (
            <div className='main container'>
                <UINavbar />
                <RouteHandler />
            </div>
        );
    }
}
