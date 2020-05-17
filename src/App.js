import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: []
    }
  }

  getPokemonCard = () => {
    console.log("clicked")
    axios.get(`https://api.pokemontcg.io/v1/cards`).then((pokemonCard) =>  { 
      console.log("cards arrived")      
      this.setState({
        pokemon: pokemonCard.data.cards
      });
      console.log( "waiting for request")
    }).catch(error => alert("No Pokemon Found"))         
  }

  render() {
    const mappedCards = this.state.pokemon.map( card => {
      return (
        <div>
           <img  src={card.imageUrl} alt={`${card.name}'s pokemon card`}/>
        </div>
      ) 
    })

    return(
      <div className="App">
        <img className ="title" src= {"https://img.cinemablend.com/cb/b/1/e/2/4/3/b1e243d63dd84e8f971694725b5ba0163629e8322092e008fc646736f5d25479.jpg"} alt = {"pokemon logo"}/>
        <div className ="card-container">
          <h1 className= "card">{mappedCards}</h1>
        </div>
        <div className = "footer-buttons">
          <button className="prev-next-buttons">{"<"}</button>
          <button className="get-pokemon-button" onClick={this.getPokemonCard}>Get your Pokemon Card Here!</button>
          <button className="prev-next-buttons">{">"}</button>
        </div>
      </div>
    )
  }
}

export default App;

