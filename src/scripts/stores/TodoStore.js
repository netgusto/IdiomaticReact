'use strict';

import { Watchable } from 'geiger';
import Immutable from 'immutable';

export default class TodoStore extends Watchable {

    constructor({ actions }) {

        super();
        this.todos = Immutable.OrderedMap();

        /*
        * Registering action handlers
        * Intentionnaly made private (just use the actions !)
        */

        actions.on('createTodo', todo => {
            this.todos = this.todos.set(todo.get('id'), todo);
            this.changed();
        });

        actions.on('fetchTodos', todos => {
            for(let todo of todos) {
                this.todos = this.todos.set(todo.get('id'), todo);
            }
            this.changed();
        });

        actions.on('deleteTodo', todo => {
            this.todos = this.todos.delete(todo.get('id'));
            this.changed();
        });
    }

    getTodos() { return this.todos.toArray(); }
}
