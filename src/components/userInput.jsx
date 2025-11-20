import React, { useState, useEffect } from 'react'

export default function UserInput(props) {
  const [currencySymbol,setCurrencySymbol] = useState(props.currency)

  useEffect( () => {
    setCurrencySymbol(props.currency);
    changeCurrencySymbol();
  }, [props, currencySymbol])

  const [inputVal, setInputVal] = useState( {
    begInvestment: currencySymbol,
    annInvestment: currencySymbol,
    retInvestment: currencySymbol,
    yearInvestment: currencySymbol
  });

  function callUserInput(inputIdentifyer, val){
    console.log(val);
    var newVal = val.replace(currencySymbol, "");
    console.log(newVal);
    // Use regex to check if user is entering letters
    // Also only allow 2 decimal places
    if (!(/^(?:[0-9]+(?:\.[0-9]{0,2})?)?$/.test(newVal))){
      return;
    }
    
    // Setting new value (val) whilst keeping others the same
    setInputVal((prev) => (
      {
      ...prev,
      [inputIdentifyer]: currencySymbol + newVal
      }
    ));
  }

  /*
  useEffect(() => {
    changeCurrencySymbol();
  }, [props.currency]);
  */
  function changeCurrencySymbol(){
    var beg = inputVal.begInvestment;
    var ann = inputVal.annInvestment;
    var ret = inputVal.retInvestment;
    var year = inputVal.yearInvestment;
    setInputVal((prev) => (
      {
        begInvestment: currencySymbol + inputVal.begInvestment.replace(/[¥£$€]/g, ""),
        annInvestment: currencySymbol + inputVal.annInvestment.replace(/[¥£$€]/g, ""),
        retInvestment: currencySymbol + inputVal.retInvestment.replace(/[¥£$€]/g, ""),
        yearInvestment: currencySymbol + inputVal.yearInvestment.replace(/[¥£$€]/g, "")
      }
    ));
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
