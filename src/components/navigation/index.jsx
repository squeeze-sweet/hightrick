import cn from 'classnames';
import styles from './navigation.module.css';
import { useCallback, useState } from 'react';
import Form from '../../components/form';
import IconWithText from '../icon-with-text';

import Button from '../../components/button';
import { Link } from 'react-scroll';

export default function Navigation({ container, activNavLink }) {
  const pagesNames = [
    { name: 'Главная', route: 'home' },
    { name: 'О школе', route: 'about-school' },
    { name: 'О тренере', route: 'about-trainer' },
    { name: 'Первая тренировка', route: 'first-lesson' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <section className={styles.container}>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <section className={styles.links}>
        {pagesNames.map(({ name, route }, index) => (
          <Link
            to={route}
            spy={true}
            smooth={true}
            key={index}
            className={cn(styles.link, {
              [styles.active]: activNavLink === route,
            })}
            container={container}
          >
            {name}
          </Link>
        ))}
      </section>
      <section className={styles.contacts}>
        <IconWithText iconScr={'/whatsapp.svg'} text="+7(912) 272-04-09" />
        <Button onClick={showModal} text="ЗАПИСАТЬСЯ" />
      </section>
    </section>
  );
}
