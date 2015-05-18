'use strict';

import React from 'react/addons';
import UIPageHeader from '../UI/PageHeader';

export default class InterfaceHome extends React.Component {

    static contextTypes = {
        user: React.PropTypes.object.isRequired
    };

    render() {

        const { user } = this.context;

        return (
            <div>
                <UIPageHeader icon="star" text={user.firstname + ' ' + user.lastname + ', welcome !'} />
                <p><strong>Idiomatic React</strong> aims to be the simplest API-centric Flux app one could build using React.</p>
                <p>Currently, it uses :</p>
                <ul>
                    <li><a href="http://facebook.github.io/react/">React 0.13.x</a> with <a href="https://facebook.github.io/jsx/">JSX</a>;</li>
                    <li><a href="https://github.com/netgusto/geiger">Geiger</a> , a tiny flux implementation (&lt;100 SLOC) with store synchronization and Dependency Injection features;</li>
                    <li><a href="https://github.com/rackt/react-router">React-Router</a> for the routing;</li>
                    <li><a href="http://facebook.github.io/immutable-js/">Immutable.js</a> for immutability in the stores;</li>
                    <li><a href="https://babeljs.io/">Babel</a> for ES6/ES7 transpilation and linting;</li>
                    <li><a href="http://webpack.github.io/">Webpack</a> for the tooling.</li>
                </ul>
            </div>
        );
    }
}
