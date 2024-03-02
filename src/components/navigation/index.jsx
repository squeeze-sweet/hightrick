import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

export default function Navigation() {
  const pagesNames = [
    { name: "Главная", route: "/" },
    { name: "О школе", route: "/about-school" },
    { name: "О тренере", route: "/about-trainer" },
    { name: "Первая тренировка", route: "/first-lesson" },
    { name: "Мерч", route: "/goods" },
  ];

  const getStyles = (route) => {
    if (route === "/goods") return cn(styles.link, styles.goods);
    return styles.link;
  };
  return (
    <section className={styles.container}>
      {pagesNames.map(({ name, route }, index) => (
        <NavLink
          to={`${route}`}
          key={index}
          className={({ isActive }) =>
            !isActive ? getStyles(route) : cn(styles.link, styles.active)
          }
          activeClassName={styles.active}
        >
          {name}
        </NavLink>
      ))}
    </section>
  );
}
