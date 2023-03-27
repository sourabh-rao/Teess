import "./App.css";
import Footer from "./Footer";
import navbar from "./Navbar";
import Products from "./Products";
import Slider from "./Slider";

function App() {
  return (
    <div className="sr">
      <div>
        {navbar()}
        {Slider()}
        {Products()}
        {Footer()}
      </div>
    </div>
  );
}

export default App;
