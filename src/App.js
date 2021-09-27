import logoBack from './logo_and_back.svg';
import redBackground from './red_back.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="background-graphics">
          <img src={redBackground} className="red-back" alt="logo" />
          <img src={logoBack} className="logo-back" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
