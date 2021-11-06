import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

class ToDoForm extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        if (this._inputElement.value.trim() !== "") {
            this.props.addToDo(this._inputElement.value);
            this._inputElement.value = "";
        };
        e.preventDefault();
    }

    render() {
        return ( 
            <div>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-2 mt-4">
                    <Form.Control
                    autoFocus
                    size="lg"
                    id="text-input"
                    type="text"
                    ref={a => {
                    this._inputElement = a;
                }} 
                    placeholder="Add a Task"
                    required />
                 </Form.Group>
                <Button type="submit" size="lg" className="mb-2 mt-4 w-25" variant="primary">Add</Button>
                </Form>
            </div>
             );
    }
}
export default ToDoForm;