import "./App.css";
import Footer from "./Footer";
import navbar from "./Navbar";
import Products from "./Products";
import slide from "./imgslide"

function App() {
  return (
    <div className="sr">
      <div>
        {navbar()}
        {slide()}
        {Products()}
        {Footer()}
      </div>
    </div>
  );
}

export default App;
