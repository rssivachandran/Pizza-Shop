import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
 