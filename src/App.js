import { useState } from 'react';
import './App.css';
import Header from './components/header';
import UserInput from './components/userInput';
import OutputData from './components/outputData';
import calculateInvestmentResults from './components/outputData';

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

  function GenerateReportButton(){
    
  }

  return (
    <div className="App">
      <Header title="Investment Calculator" currFunc={changeCurrency}/>
      <UserInput inputVal={inputVal} setInputVal={setInputVal} currencySymbol={currencySymbol} setCurrencySymbol={setCurrencySymbol} reportButton={GenerateReportButton}/>
      <OutputData currencySymbol={currencySymbol} inputVal={inputVal} />
    </div>
  );
}

export default App;
