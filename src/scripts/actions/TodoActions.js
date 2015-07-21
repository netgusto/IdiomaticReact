'use strict';

import { Action } from 'geiger';
import axios from 'axios';

import { TodoRecord } from '../records';
import uuid from '../utils/uuid';

export default class TodoActions extends Action {

    constructor({ apiendpoint }) {
        super();
        this.apiendpoint = apiendpoint;
    }

    fetchTodos() {
        return axios
            .get(this.apiendpoint + '/todos')
            .then(todos => todos.data.slice(0, 7).map(o => new TodoRecord(o)))  // passed to the store after REST response (obviously); sliced for the demo
            .then(todos => this.emit('fetchTodos', todos));
    }

    createTodo(title) {
        const todo = new TodoRecord({ id: uuid(), title });
        this.emit('createTodo', todo);
        return axios.post(this.apiendpoint + '/todos', todo);   // passed to the store without awaiting REST response for optimistic add
    }

    deleteTodo(todo) {
        this.emit('deleteTodo', todo);  // passed to the store without awaiting REST response for optimistic delete
        return axios.delete(this.apiendpoint + '/todos/' + todo.get('id'));
    }
}
