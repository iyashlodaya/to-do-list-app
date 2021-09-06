import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/todoForm';
import TodoList from './components/todoList';

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {list: [] };
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo = (value) => {
    let newItem = {
      text: value,
      key: Date.now()
    };
    this.state.list.push(newItem)
    this.setState({list: this.state.list});
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <img src={logo} className="App-logo" alt="logo" />
          <ToDoForm addToDo={this.addToDo}/>
          <TodoList list={this.state.list}/>
        </div>
      </div>
    );
  }
}
export default App;
