import './App.css';
import Footer from './Footer';
import navbar from './Navbar';

function App() {
  return (
  <div className='sr'>

    <div>
      {navbar()}
      <div className='space'>

      </div>
      {Footer()}
    </div>
  </div>
  
 

  );
}

export default App;
