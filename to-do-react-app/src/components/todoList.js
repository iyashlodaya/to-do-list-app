import React, {Component} from 'react';
import {Button, ListGroup } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

class ToDoList extends Component {

    ToDo = ({item}) => {
        return (
        <div>
            <ListGroup.Item className="todoItem" key={item.key}>{
            item.text}    
            <Button size="lg" style={{float:"right"}} onClick={() => {this.props.removeToDo(item.key)}} variant="danger"><FaTrash/></Button> {' '}
            </ListGroup.Item>
        </div>
        )
    }

    render() {
        const list = this.props.list;
        if(list.index !== 0) {
            const listItems = list.map((todo) => {
                return <this.ToDo item={todo}/>
              });
              return (
                <div className="todoListContainer">
                  <ListGroup>{listItems}</ListGroup>
                </div>
              );
        }
        else {
            return (
                <div></div>
                )
        }
         
    }
}

export default ToDoList
