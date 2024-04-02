import styles from "./Latest.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



function Latest () {
  const [top5Teams, setTop5Teams] = useState([]);
  const [top5driver, setTop5Driver] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/constructorStandings.json")
      .then((response) => response.json())
      .then((data) => {
        const constructorStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        const top5Teams = constructorStandings.slice(0, 5);
        setTop5Teams(top5Teams);
      });
  }, []);

    useEffect(() => {
      fetch('http://ergast.com/api/f1/current/driverStandings.json')
      .then(response => response.json())
      .then((data) => {
        const driversStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        const top5driver = driversStandings.slice(0, 5);
        setTop5Driver(top5driver);
      });
  }, []);



  return (
    <div className={styles.latestcontainer}>
      <div className={styles.maintitle}>
        <h1>Latest</h1>
      </div>

      <div>
        <h1 className={styles.lateststitle}>Last Results</h1>
      </div>

      <div>
        <h1 className={styles.lateststitle}>Drivers Standing</h1>
      </div>
      <table>
          <thead>
            <tr>
                <th>Position </th>
                <th> Name </th>
                <th> Points </th>
            </tr>
          </thead>
          <tbody>
              {top5driver.map((driver, index)=> (
                // console.log(driver.points)
                <tr key={index}>
                      <td>{driver.position}</td>
                      <td>{driver.Driver.familyName}</td>
                      <td>{driver.points}pts</td>
                    </tr>
                ))}
                <Link to="/drivers" className={styles.linklatest}><h5>Access Drivers List</h5></Link>
        </tbody>
        </table>



      <div>
        <h1 className={styles.lateststitle}>Teams Standing</h1>
        <div>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {top5Teams.map((team, index)=> (
            <tr key={index}>
                  <td>{team.position}</td>
                  <td>{team.Constructor.name}</td>
                  <td>{team.points}pts</td>
                </tr>
              ))}
              <Link to="/teams" className={styles.linklatest}><h5>Access Teams List</h5></Link>
          </tbody>
        </table>
        </div>

      </div>

      <div>
        <h1 className={styles.lateststitle}>Upcoming Schedule</h1>
      </div>

    </div>

    )
};

export default Latest
