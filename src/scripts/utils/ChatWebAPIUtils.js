'use strict';

export default class ChatWebAPIUtils {

    constructor({ serveractions }) {
        this.serveractions = serveractions;
    }

    getAllMessages() {
        // simulate retrieving data from a database
        const rawMessages = JSON.parse(localStorage.getItem('messages'));

        // simulate success callback
        this.serveractions.receiveAll(rawMessages);
    }

    createMessage(message, threadName) {

        // simulate writing to a database
        const rawMessages = JSON.parse(localStorage.getItem('messages'));
        const timestamp = Date.now();
        const createdMessage = {
            id: 'm_' + timestamp,
            threadID: message.threadID || ('t_' + timestamp),
            threadName: threadName,
            authorName: message.authorName,
            text: message.text,
            timestamp: timestamp
        };

        rawMessages.push(createdMessage);
        localStorage.setItem('messages', JSON.stringify(rawMessages));

        // simulate success callback
        setTimeout(() => this.serveractions.receiveCreatedMessage(createdMessage), 0);
    }
}
