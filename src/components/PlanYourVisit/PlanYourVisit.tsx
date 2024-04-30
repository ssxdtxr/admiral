import styles from "./PlanYourVisit.module.css";

import { Opening } from "../Opening/Opening";

export const PlanYourVisit = () => {
  return (
    <div className={styles.main}>
      <span className={styles.text}>
        Visit the Museum of the first Russian battleship with the assistance of
        our guided tours.
      </span>
      <div style={{ marginBottom: 30 }}>
        <Opening />
      </div>

      <div className={styles.help}>
        <span className={styles.title}>Helpfull information</span>
        <div>
          Start times for guided tours: 10.00am, 11.00am, 12.00am, 03.00pm,
          04.00pm, 05.00pm. If you have any further questions, please contact us
          at +7 (903) 853-61-60.
        </div>
      </div>
    </div>
  );
};
