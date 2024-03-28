import { Link } from "react-router-dom"

function Navbar () {

  return(
    <div className="navbar">
      <Link to="/">Latest</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/results">Results</Link>
      <Link to="/drivers">Drivers</Link>
      <Link to="/teams">Teams</Link>
    </div>
  )
}

export default Navbar
