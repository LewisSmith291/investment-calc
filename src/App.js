import { useState } from 'react';
import './App.css';
import Header from './components/header';
import UserInput from './components/userInput';

function App() {
  const [currencyType, setCurrencyType] = useState("£");

  function changeCurrency(val){
    setCurrencyType(val);
  }

  return (
    <div className="App">
      <Header title="Investment Calculator" currFunc={changeCurrency}/>
      <UserInput currency={currencyType} />
    </div>
  );
}

export default App;
