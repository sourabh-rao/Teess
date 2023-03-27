import "./App.css";
import Footer from "./Footer";
import navbar from "./Navbar";
import Products from "./Products";

function App() {
  return (
    <div className="sr">
      <div>
        {navbar()}
        {Products()}
        {Footer()}
      </div>
    </div>
  );
}

export default App;
