import { useEffect, useState } from "react"

function Drivers() {

  const [driverStanding, setDriverStanding] = useState([]);

/* using this Hook, you tell React that your component needs to do something after render. */
  useEffect(() => {
    fetch('http://ergast.com/api/f1/current/driverStandings.json')
    .then(response => response.json())
    .then((data) => {
      setDriverStanding(data["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"]);
      console.log("drivers", driverStanding[0]["Driver"]["familyName"]);
      console.log("wins", driverStanding[0]["wins"]);
    });
}, [driverStanding]);

  return(
    <div className="drivers-container">
      <div className="drivers-title">
      <h1>Driver Standing</h1>
      </div>

    </div>
  )
}

export default Drivers
