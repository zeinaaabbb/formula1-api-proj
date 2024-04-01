import styles from "./Latest.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



function Latest () {
  const [top5Teams, setTop5Teams] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/constructorStandings.json")
      .then((response) => response.json())
      .then((data) => {
        const constructorStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        const top5Teams = constructorStandings.slice(0, 5);
        setTop5Teams(top5Teams);
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
              <Link to="/teams" className={styles.linklatest}><h5>Access Full List</h5></Link>
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
