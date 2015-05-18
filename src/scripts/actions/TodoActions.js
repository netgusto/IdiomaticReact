'use strict';

import { Action } from 'geiger';
import axios from 'axios';

import { TodoRecord } from '../records';
import uuid from '../utils/uuid';

const serverFetchTodos = async (apiendpoint) => {
    let todos = await axios.get(apiendpoint + '/todos');
    return todos.data.slice(0, 7).map(o => new TodoRecord(o));  // passed to the store after REST response (obviously); sliced for the demo
};

const serverCreateTodo = (apiendpoint, newTodo) => {
    axios.post(apiendpoint + '/todos', newTodo);
};

const serverDeleteTodo = (apiendpoint, todo) => {
    axios.delete(apiendpoint + '/todos/' + todo.get('id'));
};

export default class TodoActions extends Action {

    constructor({ apiendpoint }) {
        super();
        this.apiendpoint = apiendpoint;
    }

    async fetchTodos() {
        const todos = await serverFetchTodos(this.apiendpoint);
        this.emit('fetchTodos', todos);
    }

    createTodo(title) {
        const todo = new TodoRecord({ id: uuid(), title });
        serverCreateTodo(this.apiendpoint, todo);
        this.emit('createTodo', todo);  // passed to the store without awaiting REST response for optimistic add
    }

    deleteTodo(todo) {
        serverDeleteTodo(this.apiendpoint, todo);
        this.emit('deleteTodo', todo);  // passed to the store without awaiting REST response for optimistic delete
    }
}
