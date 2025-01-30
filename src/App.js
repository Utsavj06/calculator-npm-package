import React, { useState } from 'react';
import './App.css'

const buttons = ['1','2','3','4','5','6','7','8','9','+','0','-','*','/','=']
const App = () => {
  const [numbers, setNumber] = useState('')

  const handleInputChange = (e) => {
    const input = e.target.innerHTML
    switch (input) {
      case '=':
        try {
          setNumber(eval(numbers).toString());
        } catch {
          setNumber('Error'); 
        }
        break;
      case 'C':
        setNumber(''); 
        break;
      default:
        setPrevKey(input)
        setNumber((prev) => prev + input); 
        break;
    }
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <h1>Calculator</h1>
        <input readOnly value={numbers} />
        <div className='calc-btn'>
          {buttons.map((btn)=>{
            return <button key={btn} value={btn} onClick={handleInputChange}>{btn}</button>
          })}
        </div>
        <button className='clear' onClick={() => handleInputChange('C')}>Clear</button>
      </div>
    </div>
  );
};

export default App;