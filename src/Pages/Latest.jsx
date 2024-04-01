import styles from "./Latest.module.css"

function Latest () {

  return (
    <div className={styles.latestcontainer}>
      <div className={styles.maintitle}>
        <h1>Latest</h1>
      </div>

      <div className={styles.lateststitle}>
        <h1>Last Results</h1>
      </div>

      <div className={styles.lateststitle}>
        <h1>Drivers Standing</h1>
      </div>

      <div className={styles.lateststitle}>
        <h1>Teams Standing</h1>
      </div>

      <div className={styles.lateststitle}>
        <h1>Upcoming Schedule</h1>
      </div>

    </div>

    )
};

export default Latest
