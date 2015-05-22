'use strict';

import React from 'react';

import ThreadListItem from './ThreadListItem';

export default class ThreadSection extends React.Component {

    static contextTypes = {
        threadstore: React.PropTypes.object.isRequired,
        unreadthreadstore: React.PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() { this.storesChanged(); }

    componentDidMount() {
        const { threadstore, unreadthreadstore } = this.context;

        this.unmount = [
            threadstore.watch(this.storesChanged.bind(this)),
            unreadthreadstore.watch(this.storesChanged.bind(this))
        ];
    }

    componentWillUnmount() { this.unmount.map(cbk => cbk()); }

    /**
     * Event handler for 'change' events coming from the stores
     */
    storesChanged() {
        const { threadstore, unreadthreadstore } = this.context;

        this.setState({
            threads: threadstore.getAllChrono(),
            currentThreadID: threadstore.getCurrentID(),
            unreadCount: unreadthreadstore.getCount()
        });
    }

    render() {
        const threadListItems = this.state.threads.map(function(thread) {
            return (
                <ThreadListItem
                    key={thread.id}
                    thread={thread}
                    currentThreadID={this.state.currentThreadID}
                />
            );
        }, this);

        const unread = this.state.unreadCount ? <span>Unread threads: {this.state.unreadCount}</span> : null;

        return (
            <div className="thread-section">
                <div className="thread-count">{unread}</div>
                <ul className="thread-list">{threadListItems}</ul>
            </div>
        );
    }
}
