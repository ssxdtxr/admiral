import { NavLink, useLocation } from "react-router-dom";
import { SubNavList } from "./SubNav.data";

import cn from "clsx";

import styles from "./SubNav.module.css";

export const SubNav = () => {
  const { pathname } = useLocation();

  const path = pathname.replace("/", "");

  return (
    <div className={styles.nav}>
      <ul className={styles.list}>
        {SubNavList.map((item) => (
          <NavLink to={item.href} key={item.name}>
            <li
              className={cn(styles.item, path === item.href && styles.active)}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
