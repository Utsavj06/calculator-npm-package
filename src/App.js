import React, { useState } from 'react';
import './App.css'

const buttons = ['1','2','3','4','5','6','7','8','9','+','0','-','*','/','=']
const App = () => {
  const [numbers, setNumber] = useState()
  return (
    <div className='container'>
      <div className='calculator'>
        <h1>Calculator</h1>
        <input readOnly value={numbers} />
        <div className='calc-btn'>
          {buttons.map((btn)=>{
            return <button>{btn}</button>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;