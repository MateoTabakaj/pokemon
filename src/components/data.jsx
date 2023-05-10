import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Pokemon (){
    const [pokemon, setPokemon]=useState(null)
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(res=>{setPokemon(res.data.results)})
        .catch(err=>console.log(err))
    },[])
    return(
        <><ol>
        {pokemon &&  pokemon.map((pokemon,index)=>(
            <li key={index}>{pokemon.name}</li>
        ))}
        </ol>
        </>
    )
}

export default Pokemon;