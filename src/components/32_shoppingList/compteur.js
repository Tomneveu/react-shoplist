import React, { Component } from "react";

class Compteur extends Component {

  render() {
    console.log("Compteur - rendered");
    return (
      <div>
        <span className={this.getClasses()}>{this.props.compteur.value}</span>
        
        <button
          className="btn btn-success m-2"
          onClick={() => this.props.onIncrement(this.props.compteur)}
        >
          +
        </button>

        <button
          className="btn btn-warning m-2"
          onClick={() => this.props.onDecrement(this.props.compteur)}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm m2"
          onClick={() => this.props.onDelete(this.props.compteur.id)}
        >
          X
        </button>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.compteur.value === 0 ? "light" : "secondary";
    return classes;
  }
}

export default Compteur;
