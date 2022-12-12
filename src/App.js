import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import Sidebar from './pages/Sidebar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NoMatch from './pages/NoMatch';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="modal-body row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 content">
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />

              {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
              <Route path="*" element={<NoMatch />} />
          </Routes>

        </div>
      </div>




    </>
  );
}

export default App;
