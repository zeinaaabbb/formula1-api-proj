import { useEffect , useState} from "react"
import styles from "./Schedule.module.css"

function Schedule () {

  const [raceSchedule, setRaceSchedule] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
    .then((response) => {return response.json()})
    .then((data) => setRaceSchedule(data.MRData.RaceTable.Races));
  }, [])


  const date = new Date()
  console.log(date);
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.getMonth()

  return (
    <div className={styles.schedulecontainer}>
      <div className={styles.scheduletitle}>
        <h1>{year}  Race Schedule</h1>
      </div>
      <div>
        <table>
        <thead>
          <tr>
            <th>Race No.</th>
            <th>Date</th>
            <th>Grand Prix</th>
            <th>Circuit</th>
          </tr>
        </thead>
        <tbody>
        {raceSchedule.map((race, index) =>(
          <tr key={index}>
            <td>{race.round}</td>
            <td>{race.date}</td>
            <td>{race.raceName}</td>
            <td>{race.Circuit.circuitName}</td>
          </tr>
        ))}
        </tbody>

        </table>
      </div>
    </div>
    );
};

export default Schedule
