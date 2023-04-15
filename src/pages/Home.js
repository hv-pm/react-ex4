import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PokeSkeleton from '../components/PokeSkeleton';

const Home = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        var endpoints = [];
        for (var i = 1; i <= 151; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemon(res))
        .catch((err) => console.log(err));
        // axios
        // .get("https://pokeapi.co/api/v2/pokemon?limit=50")
        // .then((ans) => setPokemon(ans.data.results))
        // .catch((err) => console.log(err));
    };

    const filterPokemon = (searchTerm) => {
        var filteredMons = [];
        if(searchTerm === "") {
            getPokemon();
        }
        for (var i in pokemon) {
            if (pokemon[i].data.name.includes(searchTerm.toLowerCase())) {
                filteredMons.push(pokemon[i]);
            }
        }
        setPokemon(filteredMons);
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div>
            <Navbar search={filterPokemon}/>
            <Container maxWidth='false'>
                <Grid container spacing={3}>
                    {pokemon.length === 0 ? <PokeSkeleton /> : 
                    pokemon.map((mon) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={mon.data.name}>
                        <PokemonCard name={mon.data.name} sprite={mon.data.sprites.front_default} types={mon.data.types}/>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Home;