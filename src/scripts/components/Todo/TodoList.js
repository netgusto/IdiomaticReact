'use strict';

import React from 'react/addons';

let TodoList = React.createClass({

    componentWillMount() { this.props.flux.getStore('todos').addListener('change', this.onTodoStoreChange); },

    componentWillUnmount() { this.props.flux.getStore('todos').removeListener('change', this.onTodoStoreChange); },

    onTodoStoreChange() { this.setState({ todos: this.props.flux.getStore('todos').getTodos() }); },

    render() {

        const onDelete = (todo) => this.props.flux.getActions('todos').deleteTodo(todo);

        return (
            <div>
                {!this.props.todos && (<h4>Nothing in the list ! Try adding some elements using the form below.</h4>)}
                {this.props.todos && this.props.todos.map((todo) =>
                    <p><button className="btn btn-default btn-sm" onClick={onDelete.bind(this, todo)}>Done</button> {todo.label()}</p>
                ).toJS()}
            </div>
        );
    }

});

module.exports = TodoList;
