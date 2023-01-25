import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom"
import InputName from './Components/InputName';
import PokemonCard from './Components/PokemonCard';
import PokemonDetail from './Components/PokemonDetail';
import ProtectedRoutes from './Components/ProtectedRoutes';
import "./index.css"

import "./App.css"

const App = () => {



  
  return (
    <div>
       <HashRouter>
         <Routes>

            <Route path = "/" element={ <InputName />}/>
            

            <Route element ={<ProtectedRoutes />}>
              <Route  path = "/pokemonCard" element = {< PokemonCard />}/>
               <Route  path = "/pokemonCard/:id" element = {< PokemonDetail />} />
            </Route>

    
         </Routes>
       </HashRouter>
    </div>
  );
};

export default App;