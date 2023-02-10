import { Link, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li className="nav-home">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-about">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
