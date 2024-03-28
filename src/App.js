import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Latest from './Pages/Latest';
import Schedule from './Pages/Schedule';
import Results from './Pages/Results';
import Drivers from './Pages/Drivers';
import Teams from './Pages/Teams';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< Latest/>}/>
          <Route path="/schedule" element={< Schedule/>}/>
          <Route path="/results" element={< Results/>}/>
          <Route path="/drivers" element={< Drivers/>}/>
          <Route path="/teams" element={< Teams/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
