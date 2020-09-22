import React, { Component } from "react";

import Compteur from "./compteur";
import TodoList from "./produit";

class Compteurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compteurs: [
        { id: 1, text: 'chemise', value: 0 },
        { id: 2, text: 'tv', value: 0 },
        { id: 3, text: 'vélo', value: 0 },
      ],
      text: '' , 
      count: 3,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  render() {
    return (
      <div>
        <TodoList compteurs={this.state.compteurs}></TodoList>
        {this.props.compteurs.map((compteur) => (
          <Compteur
            key={compteur.id}
            onDelete={this.props.onDelete}
            compteur={compteur}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Ajouter un produit :
            </label>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          //autoComplete="off"
          />
          <button onClick={this.onclick.bind(this, 'add')}>
            N° {this.state.compteurs.length + 1}
          </button>
        </form>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
      </div>
    );
  }

    handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: this.state.count,
    };
    this.setState(state => ({
      compteurs: state.compteurs.concat(newItem),
      text: ''
    }));
  }

  onclick(type) {
    this.setState(prevState => {
      return { count: type === 'add' ? prevState.count + 1 : prevState.count - 1 }
    });
  }
}

export default Compteurs;
