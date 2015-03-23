'use strict';

import React from 'react/addons';

let TodoForm = React.createClass({

    getInitialState() { return { value: '' }; },

    render() {

        const handleAdd = () => {
            this.props.onAdd(this.state.value);
            this.setState({value: ''});
        };

        const handleChange = (e) => this.setState({value: e.target.value});

        return (
            <div>
                <h2>Add a todo</h2>
                <input type="text" value={this.state.value} onChange={handleChange} />
                &nbsp;
                <button className="btn btn-primary" onClick={handleAdd}>Add</button>
            </div>
        );
    }
});

module.exports = TodoForm;
