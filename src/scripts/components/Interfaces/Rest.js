'use strict';

import React from 'react/addons';
import UIPageHeader from '../UI/PageHeader';
import TodoList from '../Todo/TodoList';
import TodoForm from '../Todo/TodoForm';

let InterfaceRest = React.createClass({
    render() {

        const handleAdd = (title) => { this.props.flux.getActions('todos').createTodo(title); };

        return (
            <div>
                <UIPageHeader icon="star" text='Todos' />

                <TodoList {...this.props} />
                <TodoForm {...this.props} onAdd={handleAdd} />
            </div>
        );
    }
});

module.exports = InterfaceRest;
