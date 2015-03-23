'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export class TodoStore extends Store {

    constructor(flux) {
        super();

        this.state = { todos: Immutable.Map() };

        class TodoRecord extends Immutable.Record({id: null, title: null}) {
            label() { return this.get('title'); }
        }

        /*
        Registering action handlers
        */

        const todoActionIds = flux.getActionIds('todos');

        this.register(todoActionIds.createTodo, (data) => {
            const newMap = this.state.todos.set(data.id, new TodoRecord(data));
            this.setState({ todos: newMap });
        });

        this.register(todoActionIds.fetchTodos, (todos) => {

            let todosMap = Immutable.Map();
            for(let todo of todos) {
                todosMap = todosMap.set(todo.id, new TodoRecord(todo));
            }

            this.setState({ todos: this.state.todos.merge(todosMap) });
        });

        this.register(todoActionIds.deleteTodo, (todo) => {
            let todos = this.state.todos.delete(todo.get('id'));
            if(todos !== this.state.todos) { this.setState({ todos: todos }); }
        });
    }

    getTodos() { return this.state.todos; }
}
