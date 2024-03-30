import {useEffect, useState} from "react";


function Teams () {

  const [teamStanding, setTeamStanding] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/constructorStandings.json")
    .then((response) => {return response.json()})
    .then((data) => setTeamStanding(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings));
    console.log("Teams", teamStanding);
  }, []);

  return (
      <div>
        <div>
          <h1>Teams Standing</h1>
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
