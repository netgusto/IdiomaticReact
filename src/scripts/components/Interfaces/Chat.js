'use strict';

import React from 'react/addons';
import UIPageHeader from '../UI/PageHeader';
import ChatApp from '../Chat/ChatApp';

export default class InterfaceRest extends React.Component {

    render() {

        return (
            <div>
                <UIPageHeader icon="star" text='Le Chat' />
                <ChatApp />
                <hr />
                <p className="text-center"><em>This is a rewrite of <a href="https://github.com/facebook/flux/tree/master/examples/flux-chat">Facebook Flux Chat</a></em></p>
            </div>
        );
    }
}

