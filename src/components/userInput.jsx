import React from 'react'
import { useState } from 'react'

export default function UserInput() {
  const [inputVal, setInputVal] = useState( {
    begInvestment: "£",
    annInvestment: "£",
    retInvestment: "£",
    yearInvestment: "£"
  });

  function callUserInput(inputIdentifyer, val){
    const newVal = val.replace("£", "");
    // Use regex to check if user is entering letters
    // Also only allow 2 decimal places
    if (!(/^\d*\.?\d{0,2}$/.test(newVal))){
      return;
    }
    
    // Setting new value (val) whilst keeping others the same
    setInputVal((prev) => ({
      ...prev,
      [inputIdentifyer]: "£" + newVal
    }))
  }

  return (
    <div id="input-group">
      <div className="input-section">
        <label>Initial Investment</label>
        <input type="text" required 
        onInput={(e) => callUserInput('begInvestment', e.target.value)} value={inputVal.begInvestment}/>
      </div>
      <div className="input-section">
        <label>Annual Investment</label>
        <input type="text" required 
        onInput={(e) => callUserInput('annInvestment', e.target.value)} value={inputVal.annInvestment}/>
      </div>
      <div className="input-section">
        <label>Expected Return</label>
        <input type="text" required 
        onInput={(e) => callUserInput('retInvestment', e.target.value)} value={inputVal.retInvestment}/>
      </div>
      <div className="input-section">
        <label>Yearly Investment</label>
        <input type="text" required 
        onInput={(e) => callUserInput('yearInvestment', e.target.value)} value={inputVal.yearInvestment}/>
      </div>
    </div>
  )
}
