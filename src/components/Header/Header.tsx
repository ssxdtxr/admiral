import styles from "./Header.module.css";
import logo from "../../assets/icon.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Логотип" />
        <span>Goto Predestinatsia</span>
      </div>
      <button>Book Tickets</button>
    </div>
  );
};

export default Header;
