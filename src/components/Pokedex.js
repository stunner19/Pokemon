import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        return(
            <div className = "Pokedex">
                <div className = "Pokedex-cards">
                    {this.props.pokemon.map(p => <Pokecard id = {p.id} name = {p.name} type = {p.type} base_experience = {p.base_experience} />)}
                </div>
            </div>
        );
    }
}

export default Pokedex;