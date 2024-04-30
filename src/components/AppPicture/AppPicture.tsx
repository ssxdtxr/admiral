import admiral from "../../assets/main.jpg";
import styles from "./AppPicture.module.css";

export const AppPicture = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={admiral} alt="Адмиралтейская площадь" className={styles.main} />
      <div
        style={{
          position: "absolute",
          bottom: 150,
          left: 200,
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        Goto Predestinatsia
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 200,
          fontSize: 25,
          fontWeight: "bold",
          width: 700,
        }}
      >
        Explore fascinating narratives detailing the conception and evolution of
        the inaugural ship of the line in the Russian Navy
      </div>
    </div>
  );
};
