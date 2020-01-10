import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render(){
        const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
        let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

        let source = `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className = "Pokecard">
                <h3 className = "Pokecard-title">{this.props.name}</h3>
                <div className = "Pokecard-img">
                    <img src = {source} alt = {this.props.name} />
                </div>
                <p className = "Pokecard-data">Type : {this.props.type}</p>
                <p className = "Pokecard-data">EXP : {this.props.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;