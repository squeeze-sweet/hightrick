import styles from './index.module.css';
import PhotoCard from '../../components/photo-card';
import { useRef, useEffect } from 'react';

export default function AboutTrainer({ setActivNavLink }) {
  const constNavControllElement = useRef(null);
  useEffect(() => {
    const scrollElement = document.getElementById('scroll-continer');
    const checkElementPosition = () => {
      const element = constNavControllElement.current; // Замените 'targetElement' на ID вашего целевого элемента
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const elementTop = elementRect.top;
        const isInTopHalf = elementTop >= 0 && elementTop <= windowHeight / 2;
        if (isInTopHalf) {
          setActivNavLink('about-trainer');
        }
      }
    };
    scrollElement.addEventListener('scroll', checkElementPosition);
    scrollElement.addEventListener('resize', checkElementPosition);
    checkElementPosition(); // Проверка при первом рендере
    return () => {
      scrollElement.removeEventListener('scroll', checkElementPosition);
      scrollElement.removeEventListener('resize', checkElementPosition);
    };
  }, [constNavControllElement]);
  return (
    <div className={styles.page} ref={constNavControllElement}>
      <h2 className={styles.header}>наш Тренер</h2>
      <PhotoCard
        className={styles.photoCard}
        photoSrc={'/master.png'}
        heading="О тренере"
        text={`Главным тренером нашей школы является российский фристайлер,
            участник церемонии открытия Кубка Конфедерации 2017, чемпион России
            по мини-футболу и четырехкратный призер соревнований по футбольному
            фристайлу среди стран СНГ - Фаридонов Ришат. Тренерский стаж: 6 лет`}
      />
      <p className={styles.text}>
        Так же у Вас есть возможность записаться на индивидуальные занятия . В
        данном случае ведётся полный контроль за прогрессом и успехами ученика.
        Все вопросы решаются в индивидуальном порядке, что очень полезно , если
        необходимо подготовить футболиста в короткие сроки или ему просто
        некомфортно заниматься в группе.
      </p>
      <p className={styles.contact}>
        По любым интересующим Вас вопросам Вы можете обращаться по номеру:
        8(912)-272-04-09 - Ришат
      </p>
    </div>
  );
}
