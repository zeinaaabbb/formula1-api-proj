import styles from "./Results.module.css"
import { useEffect, useState } from "react"

function Results () {

  const [results, setResults] = useState([])

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/last/results.json")
    .then((response) => {return response.json()})
    .then((data) => console.log(data.MRData.RaceTable.Races))
  })

  return (
    <div className={styles.resultscontainer}>
      <div className={styles.resultstitle}>
        <h1>Latest Results</h1>
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
        {results.map((result, index) =>(
          <tr key={index}>
            <td>{result.round}</td>
            <td>{result.RaceName}</td>
            <td>{result.date}</td>
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

          </tr>
        </thead>
        <tbody>
        {results.map((result, index) =>(
          <tr key={index}>
            <td>{result.Results.position}</td>
            <td>{result.Results.Driver.familyName}</td>
            <td>{result.Results.status}</td>
            <td>{(result.Results.FastestLap === 1) ? "Fastest Lap" : "" }</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
      </div>
    )
};

export default Results
