import './App.css';
import Footer from './Footer';
import navbar from './navbar';

import logo from './TeesLogo.png';

function App() {
  return (
  <div className='sr'>

    <div>
      {navbar()},
      <div className="App-logo">
        <img src={logo} className="App-logo" alt="logo" />
    </div> ,
      {Footer()}
    </div>
  </div>
  
 

  );
}

export default App;
