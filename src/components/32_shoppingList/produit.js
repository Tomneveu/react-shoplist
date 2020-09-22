import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.compteurs.map(item => (
          <li key={item.id}>#{item.id} - {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;