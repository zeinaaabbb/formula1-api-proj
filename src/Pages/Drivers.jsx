import { useEffect, useState } from "react"
import styles from "./Drivers.module.css"

function Drivers() {

  const [driverStanding, setDriverStanding] = useState([]);

/* using this Hook, you tell React that your component needs to do something after render. */
  useEffect(() => {
    fetch('http://ergast.com/api/f1/current/driverStandings.json')
    .then(response => response.json())
    .then((data) => {
      setDriverStanding(data["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"]);
      // console.log("drivers", driverStanding[0]["Driver"]["familyName"]);
      // console.log("wins", driverStanding[0]["wins"]);
      // console.log("drivers", driverStanding);
    });
}, []);

const currentDate = new Date();
const year = currentDate.getFullYear();

return(<div className={styles.driverscontainer}>
  <div className={styles.driverstitle}>
  <h1>{year} Drivers Standing</h1>
  </div>
  <table className={styles.driverstable}>
          <thead>
            <tr className={styles.driversheading}>
                <th>Position </th>
                <th> Name </th>
                <th> Points </th>
            </tr>
          </thead>
          <tbody>
        {driverStanding.map((driver, index) => {
        const position = driver.position;
        const familyName = driver.Driver.familyName;
        const points = driver.points;
        return (
            <tr key={index} className={styles.driverscontent}>
                <td>{position}</td>
                <td>{familyName}</td>
                <td>{points}pts</td>
            </tr>

            )
          })}
        </tbody>
        </table>
        </div>
  )
  }

export default Drivers
