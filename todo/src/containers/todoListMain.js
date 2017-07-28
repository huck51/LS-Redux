import React from 'react';
import showTodo from './showTodo';
import {addTodo} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TodoListMain extends React.Component {
  //Create Constructor
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        value: '',
        completed: false,
      }]
    }
    // this.handleChange = this.handleChange.bind(this);
  }
  /*
  // Added handleChange method
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  // Added hanleSub method
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      text: '',
      todos: [...this.state.todos, this.state.value]
    });
  } 
  
  addTodo() {
    this.props.addTodo(this.state.value);
  } */
  
  render() {
    return (
     <div>
        <h2>I am</h2>
      <form >
        <input placeholder='Add Task...' />
        <button type='submit'>Submit</button>
      </form>
      <showTodo />
     </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodo}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListMain);