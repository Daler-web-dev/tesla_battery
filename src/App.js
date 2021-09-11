import './App.css';
import { Header } from './components/head/head';
import  TeslaBattery  from './container/TeslaBattery';
function App() {
  return (
    <div className="App">
       <Header/>
       <TeslaBattery/>
    </div>
  );
}

export default App;
