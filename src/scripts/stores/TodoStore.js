'use strict';

import { Store } from 'geiger';
import Immutable from 'immutable';

export default class TodoStore extends Store {

    constructor({ actions }) {

        super();
        this.todos = Immutable.OrderedMap();

        /*
        * Registering action handlers
        * Intentionnaly made private (just use the actions !)
        */

        this.listen(actions, 'createTodo', todo => {
            this.todos = this.todos.set(todo.get('id'), todo);
            this.changed();
        });

        this.listen(actions, 'fetchTodos', todos => {
            for(let todo of todos) {
                this.todos = this.todos.set(todo.get('id'), todo);
            }
            this.changed();
        });

        this.listen(actions, 'deleteTodo', todo => {
            this.todos = this.todos.delete(todo.get('id'));
            this.changed();
        });
    }

    // Public API

    getTodos() { return this.todos.toArray(); }
}
