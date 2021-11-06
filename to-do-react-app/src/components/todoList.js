import React, {Component} from 'react';
import {Button, ListGroup } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';
import '../App.css';

class ToDoList extends Component {

    ToDo = ({item}) => {
        
            return (
              <div>
                <ListGroup.Item
                  className="todoItem"
                  style={item.checked ? { textDecoration: "line-through" } : {}}
                  key={item.key}
                >
                  {item.text}
                  <Button
                    size="sm"
                    style={{ float: "right" }}
                    onClick={() => {
                      this.props.removeToDo(item.key);
                    }}
                    variant="danger"
                  >
                    <FaTrash />
                  </Button>{" "}
                  <Button
                    size="sm"
                    style={
                      item.checked
                        ? { display: "none" }
                        : { float: "right", marginRight: "10px" }
                    }
                    onClick={() => {
                      this.props.checkToDo(item.key);
                    }}
                    variant="primary"
                  >
                    <FaCheck />
                  </Button>{" "}
                </ListGroup.Item>
              </div>
            );
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
