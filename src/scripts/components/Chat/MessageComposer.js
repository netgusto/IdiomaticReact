'use strict';

import React from 'react';

export default class MessageComposer extends React.Component {

    static contextTypes = {
        messageactions: React.PropTypes.object.isRequired
    };

    static propTypes = {
        threadID: React.PropTypes.string.isRequired
    };

    constructor() {
        super();
        this.state = { text: '' };
    }

    onChange(event) {
        this.setState({ text: event.target.value });
    }

    onKeyDown(event) {

        const { messageactions } = this.context;

        if(event.key === 'Enter') {
            event.preventDefault();

            const text = this.state.text.trim();
            if(text) {
                messageactions.createMessage(text, this.props.threadID);
            }

            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <textarea
                className="message-composer"
                name="message"
                value={this.state.text}
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)}
            />
        );
    }
}

