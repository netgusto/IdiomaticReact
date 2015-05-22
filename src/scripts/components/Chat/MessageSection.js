'use strict';

import React from 'react';

import MessageComposer from './MessageComposer';
import MessageListItem from './MessageListItem';

export default class MessageSection extends React.Component {

    static contextTypes = {
        messagestore: React.PropTypes.object.isRequired,
        threadstore: React.PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() { this.storesChanged(); }

    componentDidMount() {
        const { messagestore, threadstore } = this.context;

        this.scrollToBottom();

        this.unmount = [
            messagestore.watch(this.storesChanged.bind(this)),
            threadstore.watch(this.storesChanged.bind(this))
        ];
    }

    componentWillUnmount() { this.unmount.map(cbk => cbk()); }

    componentDidUpdate() { this.scrollToBottom(); }

    storesChanged() {
        const { messagestore, threadstore } = this.context;

        this.setState({
            messages: messagestore.getAllForCurrentThread(),
            thread: threadstore.getCurrent()
        });
    }

    scrollToBottom() {
        var ul = this.refs.messageList.getDOMNode();
        ul.scrollTop = ul.scrollHeight;
    }

    render() {

        return (
            <div className="message-section">
                <h3 className="message-thread-heading">{this.state.thread.name}</h3>
                <ul className="message-list" ref="messageList">
                    {this.state.messages.map(message => (
                        <MessageListItem
                            key={message.id}
                            message={message}
                        />
                    ))}
                </ul>
                <MessageComposer threadID={this.state.thread.id}/>
            </div>
        );
    }
}
