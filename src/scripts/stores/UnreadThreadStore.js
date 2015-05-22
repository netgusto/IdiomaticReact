'use strict';

import { Store } from 'geiger';

export default class Unreadthreadstore extends Store {

    constructor({ threadactions, serveractions, threadstore, messagestore }) {

        super();
        this.threadstore = threadstore;

        this.listen(threadactions, 'clickThread', ({/* threadID */}) => {
            return this.wait([threadstore, messagestore]).then(() => this.changed());
        });

        this.listen(serveractions, 'clickThread', ({/* threadID */}) => {
            return this.wait([threadstore, messagestore]).then(() => this.changed());
        });
    }

    // Public API

    getCount() {
        const threads = this.threadstore.getAll();

        let unreadCount = 0;
        threads.map(thread => {
            if(!thread.lastMessage.isRead) { unreadCount++; }
        });

        return unreadCount;
    }
}
