import { useState } from "react";
import arrowUn from "../../assets/arrowUnActive.svg";
import arrowAc from "../../assets/arrowActive.svg";

import styles from "./Opening.module.css";

import cn from "clsx";

export const Opening = () => {
  const [isAddress, setIsAddress] = useState<boolean>(false);
  const [isTransport, setIsTransport] = useState<boolean>(false);
  const [isPrice, setIsPrice] = useState<boolean>(false);
  const [isHours, setIsHours] = useState<boolean>(false);

  return (
    <div className={styles.main} style={{ marginTop: 30 }}>
      <div className={styles.card} style={{ marginLeft: 30 }}>
        <div className={styles.title}>Tickets and Opening</div>
        <div className={styles.variants}>
          <div
            className={cn(styles.name, isPrice && styles.activeName)}
            onClick={() => setIsPrice((prev) => !prev)}
          >
            <div>Ticket price</div>
            {isPrice ? (
              <img src={arrowAc} alt="Стрелка" className={styles.arrow} />
            ) : (
              <img src={arrowUn} alt="Стрелка" className={styles.arrowUn} />
            )}
          </div>
          {isPrice && (
            <div className={styles.info}>
              <div>200 rubles, reduced rate ticket: 100 rubles</div>
            </div>
          )}

          <div
            className={cn(styles.name, isHours && styles.activeName)}
            onClick={() => setIsHours((prev) => !prev)}
          >
            <div>Opening hours</div>
            {isHours ? (
              <img src={arrowAc} alt="Стрелка" className={styles.arrow} />
            ) : (
              <img src={arrowUn} alt="Стрелка" className={styles.arrowUn} />
            )}
          </div>
          {isHours && (
            <div className={styles.info}>
              <div>Wednesday: 11.00am - 06.00pm</div>
              <div>Thursday: 10.00am – 06.00pm</div>
              <div>Friday: 10.00am – 06.00pm</div>
              <div>Saturday: 10.00am – 06.00pm</div>
              <div>Sunday: 10.00am – 06.00pm</div>
              <div>Closed on Monday and Tuesday</div>
            </div>
          )}

          <div
            className={cn(styles.name, isAddress && styles.activeName)}
            onClick={() => setIsAddress((prev) => !prev)}
          >
            <div>Address</div>
            {isAddress ? (
              <img src={arrowAc} alt="Стрелка" className={styles.arrow} />
            ) : (
              <img src={arrowUn} alt="Стрелка" className={styles.arrowUn} />
            )}
          </div>
          {isAddress && (
            <div className={styles.info}>
              Admiralteyskaya square, the city of Voronezh 394035
            </div>
          )}

          <div
            className={cn(styles.name, isTransport && styles.activeName)}
            onClick={() => setIsTransport((prev) => !prev)}
          >
            <div>Public transport</div>
            {isTransport ? (
              <img src={arrowAc} alt="Стрелка" className={styles.arrow} />
            ) : (
              <img src={arrowUn} alt="Стрелка" className={styles.arrowUn} />
            )}
          </div>
          {isTransport && (
            <div className={styles.info}>
              The nearest public transport stop is Voronezh State University
              (VSU).{" "}
              <div>
                Bus: VSU (Voronezh State University) – 11н, 14н, 27, 39, 44н,
                5а, 64, 69т, 72.
              </div>{" "}
              Trolley: VSU (Voronezh State University) – 4, 7, 8.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
