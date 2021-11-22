import logo from './logo.svg';
import './App.css';
import Counterclass from './Counterclass'
function App({CounterComponent}) {
  return (
    <div className="App">
      <h2>{CounterComponent} Component</h2>
      <Counterclass countercomponent="Counter"/>
    </div>
  );
}

export default App;
