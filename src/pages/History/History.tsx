import { useScroll } from "../../hooks/useScroll";

import planF from "../../assets/planF.jpg";
import planS from "../../assets/planS.jpg";
import planT from "../../assets/planT.jpg";

import styles from "./History.module.css";

export const History = () => {
  const { scrollToRef } = useScroll();

  return (
    <div className={styles.main}>
      <div className={styles.text}>Historical Background</div>
      <div
        ref={scrollToRef}
        style={{
          letterSpacing: 1.3,
          textIndent: 30,
          marginTop: 30,
          fontSize: 23,
          background: "antiquewhite",
          color: "#000",
          borderRadius: 7,
          padding: 10,
        }}
      >
        To engage in battles on the Azov Sea, the Russian Maritime Fleet
        required not only sail-and-oar galleys and galleasses, primarily
        designed for coastal navigation, but also sailing ships capable of
        undertaking long voyages and armed with formidable artillery. Such
        vessels had not been constructed previously in Russia. Thus, on November
        19, 1698, it was decided to commence the construction of the first
        Russian ship of the line, named "Goto Predestinatsia" ("God’s
        Providence"), which represented the most formidable type of ships of
        that era.
      </div>
      <div
        style={{
          letterSpacing: 1.3,
          textIndent: 30,
          marginTop: 30,
          marginBottom: 30,
          fontSize: 23,
          background: "antiquewhite",
          color: "#000",
          borderRadius: 7,
          padding: 10,
        }}
      >
        Building Ships for the Azov Fleet Thanks in large part to the successful
        action of the ships that blocked the waterway to the Turkish fortress,
        in July 1696 Azov was captured. The capture of Azov blocked the Don
        estuary, which enabled the Russian ships to sail in the Azov Sea. On
        October 20, 1696, a far-reaching decision was adopted: "Sea Vessels
        Shall Be"!
      </div>
      <div className={styles.section}>
        <div className={styles.blockf}>
          <img src={planF} alt="" width={500} style={{ borderRadius: 10 }} />
          <div
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: 12,
              borderRadius: 7,
            }}
          >
            <div
              style={{
                fontSize: 20,
                marginTop: 10,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Reconstruction of "Goto Predestinatsia", the First Russian warship
              of the line, in Voronezh
            </div>
            <p>
              Never in history has our region enjoyed such a high-profile status
              as during the time of Peter the Great. The initiation of
              shipbuilding created perfect conditions for the rapid development
              of the region, resulting in Voronezh obtaining and maintaining its
              status as a significant agrarian, industrial, and cultural centre.
              To this day, every resident of Voronezh is aware and proud of the
              fact that they live in the city that is the cradle of the Russian
              Navy.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.section} ref={scrollToRef}>
        <div className={styles.blockf} style={{ flexDirection: "row-reverse" }}>
          <img src={planS} alt="" width={500} style={{ borderRadius: 10 }} />
          <div
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: 12,
              borderRadius: 7,
            }}
          >
            <div
              style={{
                fontSize: 20,
                marginTop: 10,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Life of Common Sailors Who Served in the Azov Fleet
            </div>
            <p ref={scrollToRef}>
              Contemporaries usually associate the service on board a sailing
              ship in the 18th century with the romanticism of sea adventures,
              captivating voyages of pioneers, and glorious victories in sea
              battles. All that is true; however, the reverse of the medal was
              the life of common sailors, which was full of dangers, privations,
              and hard physical work in extreme conditions. On the Measures of
              Punishment
            </p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.blockf}>
          <img src={planT} alt="" width={500} style={{ borderRadius: 10 }} />
          <div
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: 12,
              borderRadius: 7,
            }}
          >
            <div
              style={{
                fontSize: 20,
                marginTop: 10,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Life of Common Sailors Who Served in the Azov Fleet
            </div>
            <p>
              Contemporaries usually associate the service on board a sailing
              ship in the 18th century with the romanticism of sea adventures,
              captivating voyages of pioneers, and glorious victories in sea
              battles. All that is true; however, the reverse of the medal was
              the life of common sailors, which was full of dangers, privations,
              and hard physical work in extreme conditions. On the Measures of
              Punishment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
