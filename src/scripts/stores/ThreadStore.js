'use strict';

import { Store } from 'geiger';
import Immutable from 'Immutable';

export default class ThreadStore extends Store {

    constructor({ threadactions, serveractions, messageutils }) {

        super();
        this.threads = Immutable.OrderedMap();
        this.currentID = null;

        /*
        * Registering action handlers
        * Intentionnaly made private (just use the actions !)
        */

        this.listen(threadactions, 'clickThread', ({ threadID }) => {
            this.currentID = threadID;

            const currentThread = this.threads.get(threadID);
            currentThread.lastMessage.isRead = true;
            this.threads = this.threads.set(threadID, currentThread);

            this.changed();
        });

        this.listen(serveractions, 'receiveAll', ({ rawMessages }) => {

            rawMessages.map(message => {

                const threadID = message.threadID;
                const thread = this.threads.get(threadID);

                if(thread && thread.lastTimestamp > message.timestamp) { return; }

                this.threads = this.threads.set(threadID, {
                    id: threadID,
                    name: message.threadName,
                    lastMessage: messageutils.convertRawMessage(message, this.currentID)
                });
            });

            if(!this.currentID) {
                const allChrono = this.getAllChrono();
                this.currentID = allChrono[allChrono.length - 1].id;
            }

            const currentThread = this.threads.get(this.currentID);
            currentThread.lastMessage.isRead = true;

            this.threads = this.threads.set(currentThread.id, currentThread);

            this.changed();
        });
    }

    // Public API

    get(id) { return this.threads.get(id); }

    getAll() { return this.threads.toArray(); }

    getAllChrono() {
        return this.threads
            .sort((a, b) => a.lastMessage.date < b.lastMessage.date ? -1 : 1)
            .toArray();
    }

    getCurrentID() { return this.currentID; }

    getCurrent() {
        return this.get(this.getCurrentID());
    }
}
