import { useEffect, useState } from "react"

function Drivers() {

  const [driverStanding, setDriverStanding] = useState([]);

  useEffect(() => {
    fetch('http://ergast.com/api/f1/current/driverStandings.json')
    .then(response => response.json())
    .then((data) => {
      setDriverStanding(data["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"]);
    });
});

  return(
    <div className="drivers-container">
      <div className="drivers-title">
      <h1>Driver Standing</h1>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Drivers
