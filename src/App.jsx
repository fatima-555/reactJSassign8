import Navbar from './components/navbar';
import Carousel from "./components/carousel";
import Card from "./components/card";
import Footer from "./components/footer";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';

function App() {
  return (
      <div className="app">
         <Navbar />
         <Carousel />
         <Card />
         <Footer />
      </div>

  )
}

export default App
