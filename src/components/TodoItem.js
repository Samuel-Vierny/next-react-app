import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
    //OR the longer way, it is the same thing
    /*
     if(this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      }
    }  else {
      return {
        textDecoration: 'none'
      }
      */
  };

  render() {
    const { id, title } = this.props.todo; //this means we dont have to do this.props.todo for each one


    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}

          {title}
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
