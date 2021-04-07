import React, {UseState} from 'react';
import axios from 'axios';
import {
    AddPokemon,
    SinglePokemon,
    PokemonList
} from '../pages'

// const axios = require('axios');

export default function httpClient(){
  const [pokemon,setPokemon] = UseState([]);

    axios.get('https://pokeapi.co/api/v2/')
    .then( res =>{
        setPokemon(res.data.results.map(p => p.name))
    })
    
    console.log(axios.get('https://pokeapi.co/api/v2/'))
    return(
      <div>
          {/* <PokemonList items={menu}/> */}
          {/* console.log('items', this.props.items); */}
    </div>


    )
}

