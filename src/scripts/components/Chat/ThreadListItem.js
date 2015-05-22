'use strict';

import React from 'react';
import cx from 'classnames';

export default class ThreadListItem extends React.Component {

    static contextTypes = {
        threadactions: React.PropTypes.object.isRequired
    };

    static propTypes = {
        thread: React.PropTypes.object,
        currentThreadID: React.PropTypes.string
    };

    _onClick() { this.context.threadactions.clickThread(this.props.thread.id); }

    render() {
        const thread = this.props.thread;
        const lastMessage = thread.lastMessage;

        return (
            <li
                className={cx({
                    'thread-list-item': true,
                    'active': thread.id === this.props.currentThreadID
                })}
                onClick={this._onClick.bind(this)}>
                <h5 className="thread-name">{thread.name}</h5>
                <div className="thread-time">
                    {lastMessage.date.toLocaleTimeString()}
                </div>
                <div className="thread-last-message">
                    {lastMessage.text}
                </div>
            </li>
        );
    }

}
