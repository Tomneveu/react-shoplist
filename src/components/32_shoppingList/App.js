import React, { Component } from "react";
import Compteurs from "./compteurs";
import NavBar from "./navbar";
import Footer from './footer';

class App extends Component {
  state = {
    compteurs: [
      { id: 1, text: 'chemise', value: 0 },
      { id: 2, text: 'tv', value: 0 },
      { id: 3, text: 'vélo', value: 0 },
    ],
  };

  handleDelete = (idCompteur) => {
    const compteurs = this.state.compteurs.filter(
      (compteur) => compteur.id !== idCompteur
    );
    this.setState({ compteurs });
  };

  handleReset = () => {
    const compteurs = this.state.compteurs.map((compteur) => {
      compteur.value = 0;
      return compteur;
    });
    this.setState({ compteurs });
  };

  handleIncrement = (compteur) => {
    const compteurs = [...this.state.compteurs];

    const index = compteurs.indexOf(compteur);
    compteurs[index].value++;
    this.setState({ compteurs });
  };

  handleDecrement = (compteur) => {
    const compteurs = [...this.state.compteurs];

    const index = compteurs.indexOf(compteur);
    if (compteurs[index].value > 0) {
      compteurs[index].value--
    }
    this.setState({ compteurs });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCompteurs={
            this.state.compteurs.filter((compteur) => compteur.value > 0).length
          }
        ></NavBar>
        <Compteurs
          compteurs={this.state.compteurs}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        ></Compteurs>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
