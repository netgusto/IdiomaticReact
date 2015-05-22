'use strict';

import React from 'react';
import { ContextFactory } from 'geiger';

import ChatMessageActions from './actions/ChatMessageActions';
import ChatServerActions from './actions/ChatServerActions';
import ChatThreadActions from './actions/ChatThreadActions';

import MessageStore from './stores/MessageStore';
import ThreadStore from './stores/ThreadStore';
import UnreadThreadStore from './stores/UnreadThreadStore';

import MessageUtils from './utils/ChatMessageUtils';
import WebAPIUtils from './utils/ChatWebAPIUtils';

export const ContextBuilder = () => {

    // Declaring our App Context
    const Context = ContextFactory({
        messagestore: React.PropTypes.object.isRequired,
        threadstore: React.PropTypes.object.isRequired,
        unreadthreadstore: React.PropTypes.object.isRequired,
        messageactions: React.PropTypes.object.isRequired,
        serveractions: React.PropTypes.object.isRequired,
        threadactions: React.PropTypes.object.isRequired,
        messageutils: React.PropTypes.object.isRequired,
        webapiutils: React.PropTypes.object.isRequired
    });

    // Building Actions Stores, and other services as well

    const serveractions = new ChatServerActions();
    const threadactions = new ChatThreadActions();
    const messageutils = new MessageUtils();

    const threadstore = new ThreadStore({ threadactions, serveractions, messageutils });
    const webapiutils = new WebAPIUtils({ serveractions });

    const messageactions = new ChatMessageActions({ messageutils, webapiutils });

    const messagestore = new MessageStore({ threadactions, messageactions, serveractions, threadstore, messageutils });

    const unreadthreadstore = new UnreadThreadStore({ threadactions, serveractions, threadstore, messagestore });

    return {
        Context,
        Services: {
            messagestore,
            threadstore,
            unreadthreadstore,
            messageactions,
            serveractions,
            threadactions,
            messageutils,
            webapiutils
        }
    };
};
