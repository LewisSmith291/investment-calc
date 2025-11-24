import React, { useState, useEffect } from 'react'

export default function UserInput({inputVal, setInputVal, currencySymbol, setCurrencySymbol}) {
  

  // Update the input fields to the new symbol on currency change
  useEffect( () => {
    setCurrencySymbol(currencySymbol);
    changeCurrencySymbol();
  }, [currencySymbol]);


  function callUserInput(inputIdentifier, val){
    // remove currency symbol from new value
    var isCurrency = inputIdentifier === 'begInvestment' || inputIdentifier === 'annInvestment';

    if (isCurrency){
      var newVal = val.replace(currencySymbol, "");
      // Use regex to check if user is entering letters
      // Also only allow 2 decimal places
      if (!(/^(?:[0-9]+(?:\.[0-9]{0,2})?)?$/.test(newVal))){
        return;
      }
    }
    else {
      if (!(/^(?:[0-9]+(?:\.[0-9]{0,5})?)?$/.test(val))){
        return;
      }
    }

    setInputVal((prev) => (
      {
        // Set the other inputs to the same, while changing the current hook to the new value
      ...prev,
      // Check to see if the box is a currency or normal number, add prefix symbol to currencies
      [inputIdentifier]: isCurrency ? currencySymbol + newVal : val
      }
    ));
  }

  function changeCurrencySymbol(){
    setInputVal(() => (
      {
        begInvestment: currencySymbol + inputVal.begInvestment.replace(/[¥£$€]/g, ""),
        annInvestment: currencySymbol + inputVal.annInvestment.replace(/[¥£$€]/g, ""),
        retInvestment: inputVal.retInvestment,
        yearInvestment: inputVal.yearInvestment
      }
    ));
  }

  function submit(){

  }

  function reset(){
    setInputVal(() =>(
    {
        begInvestment: currencySymbol,
        annInvestment: currencySymbol,
        retInvestment: "",
        yearInvestment: ""
    }
    ));
  }

  function ResetButton(){
    return (
      <button id="reset-button" className="button" onClick={reset}>
        Reset Fields
      </button>
    )
  }

  function SubmitButton(){
    return (
      <button id="submit-button" className="button" onClick={submit}>
        Submit
      </button>
    )
  }

  return (
    <div id="user-input">
      <div id="input-group">
        <div className="input-section">
          <label>Initial Investment</label>
          <input type="text" required className="input-label"
          onInput={(e) => callUserInput('begInvestment', e.target.value)} value={inputVal.begInvestment}/>
        </div>
        <div className="input-section">
          <label>Annual Investment</label>
          <input type="text" required className="input-label"
          onInput={(e) => callUserInput('annInvestment', e.target.value)} value={inputVal.annInvestment}/>
        </div>
        <div className="input-section">
          <label>Expected Return (%)</label>
          <input type="text" required placeholder='0' className="input-label"
          onInput={(e) => callUserInput('retInvestment', e.target.value)} value={inputVal.retInvestment}/>
        </div>
        <div className="input-section">
          <label>Duration of Investment (years)</label>
          <input type="text" required min='0' placeholder='0' className="input-label"
          onInput={(e) => callUserInput('yearInvestment', e.target.value)} value={inputVal.yearInvestment}/>
        </div>
      </div>
      <div id="buttons">
        <ResetButton />
        <SubmitButton />
      </div>
    </div>
  )
}
