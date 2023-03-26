import './App.css';
import navbar from './navbar';

import logo from './TeesLogo.png';

function App() {
  return (
  <div className='sr'>
    <div className="App-logo">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div>
      {navbar()}
    </div>
  </div>
  
 

  );
}

export default App;
