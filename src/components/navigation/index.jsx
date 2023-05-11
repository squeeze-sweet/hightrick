import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

export default function Navigation() {
  const pagesNames = [
    { name: 'Главная', route: '/' },
    { name: 'О школе', route: '/about-school' },
    { name: 'О тренере', route: '/about-trainer' },
    { name: 'Первая тренировка', route: '/first-lesson' },
  ];

  return (
    <section className={styles.container}>
      {pagesNames.map(({ name, route }, index) => (
        <NavLink
          to={`${route}`}
          key={index}
          className={({ isActive }) =>
            !isActive ? styles.link : cn(styles.link, styles.active)
          }
          activeClassName={styles.active}
        >
          {name}
        </NavLink>
      ))}
    </section>
  );
}
