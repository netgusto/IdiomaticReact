'use strict';

import { Action } from 'geiger';

export default class ChatServerActions extends Action {

    receiveAll(rawMessages) {
        this.emit('receiveAll', { rawMessages });
    }

    receiveCreatedMessage(createdMessage) {
        this.emit('receiveCreatedMessage', { rawMessage: createdMessage });
    }
}
