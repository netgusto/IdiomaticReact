'use strict';

import { Store } from 'geiger';
import Immutable from 'Immutable';

export default class MessageStore extends Store {

    constructor({ threadactions, messageactions, serveractions, threadstore, messageutils }) {

        super();

        this.threadstore = threadstore;
        this.messageutils = messageutils;

        this.messages = Immutable.OrderedMap();

        const markAllInThreadRead = (threadID) => {
            this.messages.map(message => {
                if(message.threadID === threadID) {
                    message.isRead = true;
                    this.messages = this.messages.set(message.id, message);
                }
            });
        };

        /*
        * Registering action handlers
        * Intentionnaly made private (just use the actions !)
        */

        this.listen(threadactions, 'clickThread', ({/* threadID */}) => {
            return this.wait([threadstore]).then(() => {
                markAllInThreadRead(threadstore.getCurrentID());
                this.changed();
            });
        });

        this.listen(messageactions, 'createMessage', ({ text, currentThreadID }) => {
            const message = messageutils.getCreatedMessageData(
                text,
                currentThreadID
            );
            this.messages = this.messages.set(message.id, message);
            this.changed();
        });

        this.listen(serveractions, 'receiveAll', ({ rawMessages }) => {

            rawMessages.map(message => {
                if(this.messages.has(message.id)) { return; }
                this.messages = this.messages.set(message.id, this.messageutils.convertRawMessage(
                    message,
                    this.threadstore.getCurrentID()
                ));
            });

            return this.wait([threadstore]).then(() => {
                markAllInThreadRead(threadstore.getCurrentID());
                this.changed();
            });
        });
    }

    // Public API

    get(id) { return this.messages.get(id); }

    getAll() { return this.messages.toArray(); }

    getAllForCurrentThread() {
        const currentThreadID = this.threadstore.getCurrentID();
        return this.messages
            .filter(m => m.threadID === currentThreadID)
            .sort((a, b) => a.date < b.date ? -1 : 1)
            .toArray();
    }
}
