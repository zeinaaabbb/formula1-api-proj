import { Link } from "react-router-dom"

function Navbar () {

  return(
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/latest">Latest</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/drivers">Drivers</Link>
      <Link to="/teams">Teams</Link>
    </div>
  )
}

export default Navbar
