import './App.css';
import Header from './components/header';
import UserInput from './components/userInput';

function App() {
  return (
    <div className="App">
      <Header title="Investment Calculator"/>
      <UserInput/>
    </div>
  );
}

export default App;
