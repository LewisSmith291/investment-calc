import { useState } from 'react';
import './App.css';
import Header from './components/header';
import UserInput from './components/userInput';

function App() {
  const [currencySymbol,setCurrencySymbol] = useState("£")

  const [inputVal, setInputVal] = useState( {
    begInvestment: currencySymbol,
    annInvestment: currencySymbol,
    retInvestment: "",
    yearInvestment: ""
  });

  function changeCurrency(val){
    setCurrencySymbol(val);
  }

  return (
    <div className="App">
      <Header title="Investment Calculator" currFunc={changeCurrency}/>
      <UserInput inputVal={inputVal} setInputVal={setInputVal} currencySymbol={currencySymbol} setCurrencySymbol={setCurrencySymbol} />
    </div>
  );
}

export default App;
