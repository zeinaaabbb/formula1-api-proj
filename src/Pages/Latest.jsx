import styles from "./Latest.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



function Latest () {
  const [top5Teams, setTop5Teams] = useState([]);
  const [top5driver, setTop5Driver] = useState([]);
  const [raceSchedule, setRaceSchedule] = useState([]);

  const [top5Results, settop5Results] = useState([]);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
    .then((response) => {return response.json()})
    .then((data) => {
      const results = data.MRData.RaceTable.Races[0].Results
      // console.log("checks", results);
      const top5Results = results.slice(0,10)
      // console.log("top5",top5Results )
      settop5Results(top5Results)
    })}, [])

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
    .then((response) => {return response.json()})
    .then((data) => setRaces(data.MRData.RaceTable.Races));
    }, [])

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
    .then((response) => {return response.json()})
    .then((data) => setRaceSchedule(data.MRData.RaceTable.Races));
  }, [])

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

  const today = new Date();
  console.log(today);


  return (
    <div className={styles.latestcontainer}>
      <div className={styles.maintitle}>
        <h1>Latest</h1>
      </div>
      <div>
        <h1 className={styles.lateststitle}>Last Results</h1>
      </div>
        <table>
            <thead>
              <tr>
                <th>Race no.</th>
                <th>Race Name</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {races.map((race, index) =>(
              <tr>
                <td key={index}>{race.round}</td>
                <td>{race.raceName}</td>
                <td>{race.date}</td>
              </tr>
              ))}
            </tbody>
        </table>

    <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {top5Results.map((result, index) =>(
            // console.log("top5results", result.points)
            <tr key={index}>
              <td>{result.position}</td>
              <td>{result.Driver.familyName}</td>
              <td>{result.Constructor.name}</td>
              <td>{result.points}</td>
            </tr>
          ))}
          <Link to="/results" className={styles.linklatest}><h5>-->Access Recent Race</h5></Link>
        </tbody>
    </table>


      <div>
        <h1 className={styles.lateststitle}>Current Drivers Standing</h1>
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
                <Link to="/drivers" className={styles.linklatest}><h5>-->Access Drivers List</h5></Link>
        </tbody>
        </table>



      <div>
        <h1 className={styles.lateststitle}>Current Teams Standing</h1>
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
              <Link to="/teams" className={styles.linklatest}><h5>-->Access Teams List</h5></Link>
          </tbody>
        </table>
        </div>

      </div>

      <div>
        <h1 className={styles.lateststitle}>Upcoming Schedule</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Race No.</th>
            <th>Grand Prix</th>
            <th>Circuit</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {raceSchedule.map((race, index) =>(
          // console.log(race.date)
          <tr key={index}>
            <td>{race.round}</td>
            <td>{race.raceName}</td>
            <td>{race.Circuit.circuitName}</td>
            <td>{race.date}</td>
            <td>{new Date(race.date) >=  new Date(today) ? "upcoming" : ""}</td>
          </tr>
          ))}
        <Link to="/schedule" className={styles.linklatest}><h5>-->Access Schedule List</h5></Link>
        </tbody>

        </table>

    </div>

    )
};

export default Latest
