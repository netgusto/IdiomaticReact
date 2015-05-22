'use strict';

import { Action } from 'geiger';

export default class ChatMessageActions extends Action {

    constructor({ messageutils, webapiutils }) {
        super();
        this.messageutils = messageutils;
        this.webapiutils = webapiutils;
    }

    createMessage(text, currentThreadID) {
        this.emit('createMessage', { text, currentThreadID });

        const message = this.messageutils.getCreatedMessageData(text, currentThreadID);
        this.webapiutils.createMessage(message);
    }
}
