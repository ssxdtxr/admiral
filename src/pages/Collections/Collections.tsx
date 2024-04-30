import { useScroll } from "../../hooks/useScroll";
import styles from "./Collections.module.css";

import collections1 from "../../assets/collections1.jpg";
import collections2 from "../../assets/collections2.jpg";
import collections3 from "../../assets/collections3.jpg";
import collections4 from "../../assets/collections4.jpg";
import collections5 from "../../assets/collections5.jpg";

export const Collections = () => {
  const { scrollToRef } = useScroll();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div ref={scrollToRef} className={styles.main}>
        <img src={collections1} width={700} alt="" />
        <img src={collections2} width={700} alt="" />

        <img src={collections3} width={700} height={526} alt="" />
        <img src={collections4} width={700} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <img src={collections5} width={700} alt="" />
      </div>
    </div>
  );
};
