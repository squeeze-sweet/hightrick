import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import Form from '../../components/form';
import IconWithText from '../icon-with-text';

import Button from '../../components/button';

export default function Navigation() {
  const pagesNames = [
    { name: 'Главная', route: '/' },
    { name: 'О школе', route: '/about-school' },
    { name: 'О тренере', route: '/about-trainer' },
    { name: 'Первая тренировка', route: '/first-lesson' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <section className={styles.container}>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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

        <Button onClick={showModal} text="ЗАПИСАТЬСЯ" />
        <IconWithText iconScr={'/whatsapp.svg'} text="+7(912) 272-04-09" />
    </section>
  );
}
