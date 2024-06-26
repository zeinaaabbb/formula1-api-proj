import {useEffect, useState} from "react";
import styles from "./Teams.module.css";


function Teams () {

  const [teamStanding, setTeamStanding] = useState([]);
  const [top5Teams, setTop5Teams] = useState([])

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/constructorStandings.json")
    .then((response) => {return response.json()})
    .then((data) => {
    setTeamStanding(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
    const top5Teams = setTop5Teams(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.slice(0,5));
    setTop5Teams(top5Teams);
  })
  // console.log("top 5", top5Teams)
  }, []);



  const date = new Date();
  const year = date.getFullYear();

  return (
      <div className={styles.teamscontainer}>
        <div className={styles.teamstitle}>
          <h1>{year} Teams Standing</h1>
        </div>
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
              {teamStanding.map((team, index) => (
                // console.log("name", team.Constructor.name)
                // console.log("name", team.position)
                // console.log("name", team.points)
                <tr>
                  <td>{team.position}</td>
                  <td>{team.Constructor.name}</td>
                  <td>{team.points}pts</td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
      </div>
      )
};

export default Teams
