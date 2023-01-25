//import React, { lazy } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.Slice';
import lay from "../assets/images/lay.png"



const InputName = () => {

    const dispatch = useDispatch()
    const [ input, setInput] = useState("")
    const navigate = useNavigate()
    const clickButton= () => {
        dispatch(changeUserName(input));
        navigate("/Pokemoncard")

    }


    return (
        <div className='input'>
            <h1>Hello Trainer</h1>
            <div className='image-first animate__animated animate__fadeInBottomRight'>
            <img className = "image-first1" src={lay} alt="" />
            </div>
            <h3>Give me your name to start </h3>
            <input className='input-name' type="text" 
                value={input}
                onChange ={ e => setInput(e.target.value)}
               
            
            />
            <button onClick={clickButton}>Submit</button>
        </div>
    );
};

export default InputName;