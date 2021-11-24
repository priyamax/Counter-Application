
import './App.css';
import Counterclass from './Counterclass'
import CounterAppFun from './CounterApp';

function App({CounterComponent}) {

  return (
    <div className="App">
      <h2>{CounterComponent} Component</h2>
      <Counterclass countercomponent="Counter"/>
      <CounterAppFun CntApp ="Counter"/>
    </div>
  );
}

export default App;
