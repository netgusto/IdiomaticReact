'use strict';

import React from 'react/addons';

let UIPageHeader = React.createClass({
    render() {
        return (
            <div>
                <h2 className="pageheader"><i className={'fa fa-' + this.props.icon }></i> {this.props.text}</h2>
                <hr />
            </div>
        );
    }
});

module.exports = UIPageHeader;
