import { Link } from "react-router-dom"

function Navbar () {

  return(
    <div className="navbar">
      <h1>F1: Beyond the Grid 🏎️  </h1>
      <button className="btn-navbar"><Link to="/" className="navlink">Latest</Link></button>
      <button className="btn-navbar"><Link to="/schedule" className="navlink">Schedule</Link></button>
      <button className="btn-navbar"><Link to="/results" className="navlink">Results</Link></button>
      <button className="btn-navbar"><Link to="/drivers" className="navlink">Drivers</Link></button>
      <button className="btn-navbar"><Link to="/teams" className="navlink">Teams</Link></button>
    </div>
  )
};

export default Navbar
