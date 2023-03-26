import './App.css';
import Footer from './Footer';
import navbar from './navbar';

function App() {
  return (
  <div className='sr'>

    <div>
      {navbar()},
      {Footer()}
    </div>
  </div>
  
 

  );
}

export default App;
