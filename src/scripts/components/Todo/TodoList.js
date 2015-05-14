'use strict';

import React from 'react/addons';

export default class TodoList extends React.Component {

    static contextTypes = {
        todostore: React.PropTypes.object.isRequired,
        todoactions: React.PropTypes.object.isRequired
    };

    componentWillMount() {
        this.unwatchTodostore = this.context.todostore.watch(this.forceUpdate.bind(this));
    }

    componentWillUnmount() { this.unwatchTodostore(); }

    render() {

        const { todoactions, todostore } = this.context;
        const onDelete = (todo) => todoactions.deleteTodo(todo);

        const todos = todostore.getTodos();

        return (
            <div>
                {todos.length === 0 && (<h4>Nothing in the list ! Try adding some elements using the form below.</h4>)}
                {todos.map((todo) =>
                    <p><button className="btn btn-default btn-sm" onClick={onDelete.bind(this, todo)}>Done</button> {todo.label()}</p>
                )}
            </div>
        );
    }

}
