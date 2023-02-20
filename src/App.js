import { Link, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import './App.css';


function App() {

  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
              <div className="logo">

              </div>
          </div>
          <ul className="nav-links">
            <li className="nav-AI">
              <Link to="/">AI</Link>
            </li>
            <li className="separator">

            </li>
            <li className="nav-3D">
              <Link to="/about">3D</Link>
            </li>
          </ul>
          <div className="nav-dummy">

          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
