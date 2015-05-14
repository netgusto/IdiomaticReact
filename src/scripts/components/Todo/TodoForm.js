'use strict';

import React from 'react/addons';

export default class TodoForm extends React.Component {

    static contextTypes = {
        todoactions: React.PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = { value: '' };
    }

    render() {

        const { todoactions } = this.context;

        const handleAdd = () => {
            if(this.state.value.trim() === '') { return; }
            todoactions.createTodo(this.state.value);
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
}
