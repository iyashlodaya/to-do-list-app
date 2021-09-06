import React, { Component } from 'react'

class ToDoForm extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        if (this._inputElement.value !== "") {
            this.props.addToDo(this._inputElement.value);
            this._inputElement.value = "";
        };
        e.preventDefault();
    }



    render() {
        return ( 
            <div>
                <label for="todo">Add Todo</label>
                <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                id="todo" 
                placeholder="Add a Task" 
                ref={a => {
                    this._inputElement = a;
                }}
                />
                <button type="submit">Add</button>
                </form>
            </div>
             );
    }
}
export default ToDoForm;