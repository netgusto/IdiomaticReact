'use strict';

import Immutable from 'immutable';

export class TodoRecord extends Immutable.Record({
    id: null,
    title: null
}) {
    label() { return this.get('title'); }
}
