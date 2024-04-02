import styles from "./Results.module.css"
import { useEffect, useState } from "react"

function Results () {

  const [results, setResults] = useState([]);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
    .then((response) => {return response.json()})
    .then((data) => setResults(data.MRData.RaceTable.Races[0].Results))
  }, [])

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
    .then((response) => {return response.json()})
    .then((data) => setRaces(data.MRData.RaceTable.Races))


  }, [])

  return (
    <div className={styles.resultscontainer}>
      <div className={styles.resultstitle}>
        <h1>Last Race Results</h1>
      </div>
      <div>
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
            <th>Status</th>
            <th>Fastest Lap</th>

          </tr>
        </thead>
        <tbody>
        {results.map((result, index) =>(
          // console.log("result", result)
          //  console.log("position", result.position)
          // console.log("familyName", result.Driver.familyName)
          // console.log("Status", result.status)
          // console.log("fastestlap", result)
          <tr key={index}>
            <td>{result.position}</td>
            <td>{result.Driver.familyName}</td>
            <td>{result.status}</td>
            <td>{(result.FastestLap.rank === 1) ? "Fastest Lap" : "" }</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
      </div>
    )
};

export default Results
