import React, { useState } from 'react';
import './App.css';

function App() {

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
      
     
    </div>
  );
}

export default App;
