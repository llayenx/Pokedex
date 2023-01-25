import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

     const{id}= useParams()

     const [pokemonUnique, setPokemonUnique] = useState({})

     useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemonUnique(res.data))
        .catch(() => alert(" This Pokemon does not exist"))
     },[])
     
    

    return (
        <div className='container-all'>
            <div className='title-pokermondetail'>
              <h2>Pokemon detail</h2>
            </div>
            
           <div className='conatiner-image'>
             <img  className='image-detail' src={pokemonUnique.sprites?.other.dream_world.front_default} alt="" />
           </div>
           
           
            <div className='resistency'>
                 
                 <div className='Weight'>
                    <p>{pokemonUnique.weight}</p>
                     <b>Weight</b>
                </div>
                
                <div className='height'>
                <p>{pokemonUnique.height}</p>
                <b>Height</b>
                </div>
               

               
            </div>

            <h2 className='name.pokemon'>{pokemonUnique.name}</h2>

            <div className='id-detail'>   <b> id :{pokemonUnique.id}</b> </div>

            <div className='type-ability'>
            <div className='types'>
            
            <div className='types-map'>
             <h3>Type</h3>
            {pokemonUnique.types?.map(type =>(
               <p key= {type.type.name}>{type.type.name}</p>
 
            ))}
            </div>
          </div>

            <div className='abilities'>
            <h3>Abilities</h3>
            {pokemonUnique.abilities?.map(ability =>(
               <p key= {ability.ability.name}>{ability.ability.name}</p>
 
            ))}
               </div>
            </div>

          

          <div className='stats-base'>
            
            <h3>Stats Base</h3>
            
             <p> Hp : {pokemonUnique.stats?.[0].base_stat}</p>
                <progress 
                 value={pokemonUnique.stats?.[0].base_stat} max ="200">
                 </progress>
       

            <p> Attack :{pokemonUnique.stats?.[1].base_stat}</p>
               <progress 
                 value={pokemonUnique.stats?.[1].base_stat} max ="200">
               </progress>

            <p> Defense :{pokemonUnique.stats?.[2].base_stat}</p>
                 <progress 
                 value={pokemonUnique.stats?.[2].base_stat} max ="200">
                 </progress>

            <p> Speed :{pokemonUnique.stats?.[5].base_stat}</p>
               <progress 
                 value={pokemonUnique.stats?.[5].base_stat} max ="200">
                </progress>
          </div>

          <div className='movements'>
            <h3>Movements</h3>
            {pokemonUnique.moves?.map((movement, index) =>(
                <p key ={index}>{movement.move.name}</p>

            ))}
          </div>
          


        </div>
    );
};

export default PokemonDetail;