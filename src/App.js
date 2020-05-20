import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      index: 0
    }
  }

  getPokemonCard = () => {
    axios.get(`https://api.pokemontcg.io/v1/cards`).then((pokemonCard) =>  {     
      this.setState({
        pokemon: pokemonCard.data.cards
      });
    }).catch(error => alert("No Pokemon Found"))         
  }

  buttonNext = () => {
    let nextIndex = this.state.index + 1
  
    if(nextIndex === this.state.person.length) {
      nextIndex = this.state.person.length -1
    }
    this.setState({index: nextIndex})
  }
   
  buttonPrev = () => {
    if(this.state.index === 0) 
    return;
  
    this.setState(element => ({
      index: element.index - 1
    }))
   
  }

  render() {
    const { pokemon, index } = this.state

    return(
      <div className ="App">
        <img className ="title" src= "https://img.cinemablend.com/cb/b/1/e/2/4/3/b1e243d63dd84e8f971694725b5ba0163629e8322092e008fc646736f5d25479.jpg" alt = "pokemon logo"/>
        <div className ="card-container">
          {
            pokemon[index] ? (
              <img className ="card" src={pokemon[index].imageUrl} alt ={`${pokemon[index].name} pokemon card`}/>
            ) : null
          }
        </div>
        <div className ="footer-buttons">
          <button className ="prev-next-buttons" onClick={this.buttonPrev}>{"<"}</button>
          <button className ="get-pokemon-button" onClick={this.getPokemonCard}>Get your Pokemon Card Here!</button>
          <button className ="prev-next-buttons" onClick={this.buttonNext}>{">"}</button>
        </div>
      </div>
    )
  }
}

export default App;

