'use strict';

import React from 'react/addons';
import UIPageHeader from '../UI/PageHeader';
import TodoList from '../Todo/TodoList';
import TodoForm from '../Todo/TodoForm';

export default class InterfaceRest extends React.Component {

    render() {

        return (
            <div>
                <UIPageHeader icon="star" text='Todos' />
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

module.exports = InterfaceRest;
