import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render(){
        const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        let source = `${POKE_API}${this.props.id}.png`
        return(
            <div className = "Pokecard">
                <h3>{this.props.name}</h3>
                <img src = {source} alt = {this.props.name} />
                <p>Type : {this.props.type}</p>
                <p>EXP : {this.props.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;