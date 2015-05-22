'use strict';

import React from 'react';
import MessageSection from './MessageSection';
import ThreadSection from './ThreadSection';

export default class ChatApp extends React.Component {
    render() {
        return (
            <div className="chatapp">
                <ThreadSection />
                <MessageSection />
            </div>
        );
    }
}
