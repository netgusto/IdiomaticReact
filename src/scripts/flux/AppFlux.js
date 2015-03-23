'use strict';

import { Flux } from 'flummox';
import Immutable from 'immutable';

import { TodoActions } from '../actions/TodoActions';
import { TodoStore } from '../stores/TodoStore';

export class AppFlux extends Flux {

    constructor(config) {
        super();

        this.config = Immutable.fromJS(config);

         // The extra argument(s) are passed to the Action / Store constructors
        this.createActions('todos', TodoActions, this.getApiendpoint());
        this.createStore('todos', TodoStore, this);
    }

    getApiendpoint() { return this.config.get('apiendpoint'); }

    getUser() { return this.config.get('user').toJS(); }

}
