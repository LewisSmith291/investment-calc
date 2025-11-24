import { useState } from 'react';
import './App.css';
import Header from './components/header';
import UserInput from './components/userInput';
import OutputData from './components/outputData';
import calculateInvestmentResults from './util/investment.js'

function App() {
  const [currencySymbol,setCurrencySymbol] = useState("£")

  const [inputVal, setInputVal] = useState( {
    begInvestment: currencySymbol,
    annInvestment: currencySymbol,
    retInvestment: "",
    yearInvestment: ""
  });

  const [output, setOutput] = useState(calculateInvestmentResults(inputVal));

  function changeCurrency(val){
    setCurrencySymbol(val);
  }

  function submitButton(){
    setOutput(calculateInvestmentResults(inputVal));
  }

  return (
    <div className="App">
      <Header title="Investment Calculator" currFunc={changeCurrency}/>
      <UserInput inputVal={inputVal} setInputVal={setInputVal} currencySymbol={currencySymbol} setCurrencySymbol={setCurrencySymbol} submitFunction={submitButton}/>
      <OutputData inputVal={output} />
    </div>
  );
}

export default App;
