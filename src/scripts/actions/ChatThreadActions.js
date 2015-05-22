'use strict';

import { Action } from 'geiger';

export default class ChatThreadActions extends Action {

    clickThread(threadID) {
        this.emit('clickThread', { threadID });
    }

}
