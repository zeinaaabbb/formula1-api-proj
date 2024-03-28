import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Latest from './Pages/Latest';
import Schedule from './Pages/Schedule';
import Drivers from './Pages/Drivers';
import Teams from './Pages/Teams';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< Home/>}/>
          <Route path="/latest" element={< Latest/>}/>
          <Route path="/schedule" element={< Schedule/>}/>
          <Route path="/drivers" element={< Drivers/>}/>
          <Route path="/teams" element={< Teams/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
