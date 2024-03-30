import { useEffect , useState} from "react"

function Schedule () {

  const [raceSchedule, setRaceSchedule] = useState([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
    .then((response) => {return response.json()})
    .then((data) => setRaceSchedule(data.MRData.RaceTable.Races));
  }, [])


  return (
    <div>
      <div>
        <h1>Race Schedule</h1>
      </div>
      <div>
        {raceSchedule.map((race, index) =>(
          <div>
            <li key={index}>{race.raceName} - {race.Circuit.circuitName}</li>
            <li key={index}>{race.date}</li>
            <li key={index}>{race.round}</li>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Schedule
