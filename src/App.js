import { Link, Route, Routes, useLocation } from "react-router-dom"
import Home from './pages/Home';
import IAProjectOne from './pages/IAProjectOne';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ScrollToHashElement from "./pages/utils/ScrollToHashElement";
import './App.css';
import { useEffect } from "react";


function App() {

  const location = useLocation();

  useEffect(() => {
    // listen for hashchange event
    window.addEventListener('hashchange', handleHashChange);
    // cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  function handleHashChange() {
    const targetId = window.location.hash.slice(1); // remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (

    <div className="App">
      <ScrollToHashElement></ScrollToHashElement>
      <nav>
        <div className="nav-container">
          <Link className="nav-logo" to={'/'}>
              <div className="logo">

              </div>
          </Link>
          <ul className="nav-links">
            <li className="nav-AI">
              {location.pathname === '/' ? (
                  <a href="#home-ai">AI</a>
                ) : (
                  // <a href="/#home-ai">AI</a>
                  <Link to={{ pathname: '/', hash: '#home-ai' }}>AI</Link>
              )}
            </li>
            <li className="separator">

            </li>
            <li className="nav-3D">
              {location.pathname === '/' ? (
                  <a href="#home-3d">3D</a>
                ) : (
                  <Link to={{ pathname: '/', hash: '#home-3d' }}>3D</Link>
              )}
            </li>
          </ul>
          <div className="nav-dummy">

          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/IAProjectOne" element={<IAProjectOne />} />
      </Routes>

    </div>
  );
}

export default App;
