import React, { useState } from 'react';
import './App.css';

function App() {
  const urlAPI = 'https://pokeapi.co/api/v2/pokemon/';
  const [skin, setSkin] = useState(0);
  const changeSkin = () => {
      setSkin(skin<1?1:0);  
    }

  return (
    <div className='App'>
      <div id='app-size' className={'App-skin-'+skin}>

      </div>
      <div>
        <button className='ButtonChange' onClick = {changeSkin}>
          <span id='icon-b1' className={'icon-button-'+skin} title={'Change to '+ (skin===0?'Dark':'Red') +' skin'}> </span>
        </button>
      </div>

      <div className='Search-bar'>
        <input type='text' id='searchPokemon' className='input-search'/>
      </div>

      <div>
        <button className='ButtonSpeech' onClick = ''>
          <span className='icon-speech' title='Speech PokeInfo'> </span>
        </button>
      </div>

      <div>
        <button className='ButtonSearch' onClick = ''>
          <span className='icon-search' title='Search Pokemon'> </span>
        </button>
      </div>
      

      
      
     
    </div>
  );
}

export default App;
