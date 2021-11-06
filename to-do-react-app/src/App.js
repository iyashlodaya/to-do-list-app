import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDoForm from './components/todoForm';
import TodoList from './components/todoList';

import React, { Component } from 'react';

let id = 0;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {list: [] };
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.checkToDo = this.checkToDo.bind(this);


  }

  addToDo = (value) => {
    let newItem = {
      text: value,
      checked:false,
      key: id++,
    };
    this.state.list.push(newItem)
    this.setState({list: this.state.list});
    console.log('this.state.list',this.state.list);
  }

  removeToDo = (key) => {
    let remainderArray = [];
    for (let i = 0; i < this.state.list.length; i++) {
      const item = this.state.list[i];
      if(item.key !== key) {
        remainderArray.push(item);
      }
    }
    this.setState({list:remainderArray})
  }

  checkToDo = (key) => {
    let checkedArray = [...this.state.list];
    let itemIndex = checkedArray.findIndex((item) => item.key === key);
    checkedArray[itemIndex].checked = true;
    this.setState(checkedArray);
  }
  

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="todoFormContainer">
          <ToDoForm addToDo={this.addToDo}/>
          </div>
          <div style={(this.state.list.length===0) ? {display:"none"} : {display:"block"}}>
          <TodoList list={this.state.list} removeToDo={this.removeToDo} checkToDo={this.checkToDo}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
