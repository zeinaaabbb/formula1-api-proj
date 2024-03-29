import {useEffect, useState} from "react";


function Teams () {

  const [teamStanding, setTeamStanding] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/constructorStandings.json")
    .then((response) => {return response.json()})
    .then((data) => console.log(data));
  }, []);

  return (
      <div>
        <h1>Teams Standing</h1>
      </div>
      )
};

export default Teams
