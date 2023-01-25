import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pike from "../assets/images/pike.png"

const CardsOfPokermon = ({url}) => {

         const [pokemonCard, setPokemonCard] = useState({})

         const navigate = useNavigate()
         
         useEffect(() => {
            axios.get(url)
            .then(res =>setPokemonCard(res.data))

         },[])

         console.log()

         const typeOne = pokemonCard?.types?.[1]?.type.name;
         const typeTwo = pokemonCard?.types?.[0]?.type.name;

         const changeColorCardPokemon = () => {
            if (typeTwo === "normal" || typeOne === "") {
              return "#735159";
            } else if (typeTwo === "fighting" || typeOne === "") {
              return "#973F26";
            } else if (typeTwo === "poison" || typeOne === "") {
              return "#5B2D86";
            } else if (typeTwo === "ground" || typeOne === "") {
              return "#FFEB3B";
            } else if (typeTwo === "rock" || typeOne === "") {
              return "#46180B";
            } else if (typeTwo === "bug" || typeOne === "") {
              return "#8BC34A";
            } else if (typeTwo === "ghost" || typeOne === "") {
              return "#31336A";
            } else if (typeTwo === "fire" || typeOne === "") {
              return "#FB6C6C";
            } else if (typeTwo === "water" || typeOne === "") {
              return "#70B7FA";
            } else if (typeTwo === "grass" || typeOne === "") {
              return "#48D0B0";
            } else if (typeTwo === "electric" || typeOne === "") {
              return "#E2E02D";
            } else if (typeTwo === "ice" || typeOne === "") {
              return "#86D2F4";
            } else if (typeTwo === "dragon" || typeOne === "") {
              return "#448A94";
            } else if (typeTwo === "dark" || typeOne === "") {
              return "#030706";
            } else if (typeTwo === "fairy" || typeOne === "") {
              return "#981844";
            } else if (typeTwo === "psychic" || typeOne === "") {
              return "grey";
            } else if (typeTwo === "steel" || typeOne === "") {
              return "#0093B2";
            } else {
              return "grey";
            }
          };



          const image = pokemonCard.sprites?.other.dream_world.front_default
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        

    return (
        <li className='Col'>
        <div style={{background: changeColorCardPokemon()}}
            className='card scale-in-top ' 
              onClick={() => navigate(`/pokemonCard/${pokemonCard.id}`)}>
            <b>{pokemonCard.name}</b>
            <img className='image' src={image? image: pike} alt="" />
             
             {pokemonCard.types?.map(type =>(
                <b key = {type.type.name}>{type.type.name}</b>
             )
             )}
            <p> Hp : {pokemonCard.stats?.[0].base_stat}</p>
            <p> Attack :{pokemonCard.stats?.[1].base_stat}</p>
            <p> Defense :{pokemonCard.stats?.[2].base_stat}</p>
            <p> Speed :{pokemonCard.stats?.[5].base_stat}</p>


        </div>
        </li>
        
    );
};

export default CardsOfPokermon;