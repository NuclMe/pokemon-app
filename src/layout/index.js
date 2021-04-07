import React from 'react';
import styles from '../layout/layot.module.css'
import {
    AddPokemon,
    SinglePokemon,
    PokemonList
  } from '../pages'
// import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import httpClient from '../utils/httpClient'
export default function Layout() {
    return (
       <div className={styles.Layout}>
           
            <httpClient/> 
            {/* <Router>
            <Link to="/">Home</Link>
            <Link to="/AddPokemon">AddPokemon</Link>
            <Route exact path="/" component={React} /> 
            <Route exact path="/AddPokemon" component={AddPokemon} />
            </Router> */}
            {/* <input type='select'/> */}
        </div>
    )
}
