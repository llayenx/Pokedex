import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardsOfPokermon from './CardsOfPokermon';

const PokemonCard = () => {

    const userName = useSelector(state => state.userName)

    const [pokemonCards, setPokemonCards] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    const  [types, setTypes] = useState([])


    const navigate = useNavigate()

     useEffect (() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
        .then( res => setPokemonCards(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
        .then( res => setTypes(res.data.results))
        },[])

        console.log(types)
        
    

    
 const search = () => {
  
    navigate(`/pokemonCard/${inputSearch.toLowerCase()}`)

 }

 const filterType = e => {
    axios.get(e.target.value)
    .then ( res => setPokemonCards(res.data.pokemon ))
 }
 const [page, setPage] = useState(1);
   const lastIndex = page * 20;
   const firstIndex = lastIndex - 20;
   const pagination = pokemonCards?.slice(firstIndex, lastIndex);
   const lastPage = Math.ceil(pokemonCards?.length / 20);

      const numbers = [];

      for (let i = page - 3; i <= page + 3; i++) {
        if (i >= page && i <= lastPage) {
          numbers.push(i);
        }
      }

    return (

        <div>
            <h1>Pokedex</h1>
            <h4>Welcome {userName},here you cand find your favorite pokemon</h4>

            <div>
                <input 
                    className='input-pokedex'
                   type="text"
                    placeholder='search your pokemon'
                      value = {inputSearch} 
                       onChange = {e => setInputSearch(e.target.value)}
                />
                <button onClick={search}>Search</button>
            </div>
            <br />
            <br />
            <div>
                <select  
                 className='select-pokedex'
                
                onChange={filterType} name="" id="">
                    {types.map(type => (
                        <option value= {type.url} key = {type.url }>{type.name}</option>
                    ))}
                </select>
            </div>
            <div className='pokemon-list'>
                {
                  pagination.map(pokemonCard => (
                   <CardsOfPokermon 
                   url ={pokemonCard.url ? pokemonCard.url : pokemonCard.pokemon.url}
                   key ={pokemonCard.url ? pokemonCard.url : pokemonCard.pokemon.url}/> 
                ))
                }
            </div>

            <footer>
        <div className="containerbuttonFooter">
          <button
            className="btn-back"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}>
            Previous
          </button>
          {numbers.map((number) => (
            <button
              key={number}
              className="pagination_numbers"
              onClick={() => setPage(number)}>
              {number}
            </button>
          ))}
            <button
              className="btn-next"
              onClick={() => setPage(page + 1)}
              disabled={page === lastPage}>
            Next
            </button>
          </div>
        </footer>

















            

            
        </div>
    );
};

export default PokemonCard;