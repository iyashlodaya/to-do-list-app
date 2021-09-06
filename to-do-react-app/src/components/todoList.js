import React, {Component} from 'react';

class ToDoList extends Component {

    createTodoItem = (item) => {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        const list = this.props.list;
        const listItems = list.map(this.createTodoItem);
        return (
            <ul>{listItems}</ul>
        ); 
    }
}

export default ToDoList
