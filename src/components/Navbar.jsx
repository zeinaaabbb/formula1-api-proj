import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar () {

  return(
    <div className="navbar">
      <h1 className={styles.f1title}>F1: Beyond the Grid 🏎️  </h1>
      <button className={styles.btnnavbar}><Link to="/" className={styles.navlink}>Latest</Link></button>
      <button className={styles.btnnavbar}><Link to="/schedule" className={styles.navlink}>Schedule</Link></button>
      <button className={styles.btnnavbar}><Link to="/results" className={styles.navlink}>Results</Link></button>
      <button className={styles.btnnavbar}><Link to="/drivers" className={styles.navlink}>Drivers</Link></button>
      <button className={styles.btnnavbar}><Link to="/teams" className={styles.navlink}>Teams</Link></button>
    </div>
  )
};

export default Navbar
