import styles from './index.module.css';
import PhotoCard from '../../components/photo-card';
import Button from '../../components/button';
import Form from '../../components/form';
import { useCallback, useState } from 'react';

export default function AboutTrainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);
  return (
    <div className={styles.page}>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <h2 className={styles.header}>наш Тренер</h2>
      <PhotoCard
        className={styles.photoCard}
        photoSrc={'/master.png'}
        heading="О тренере"
        text={`Главным тренером нашей школы является российский фристайлер,
            участник церемонии открытия Кубка Конфедерации 2017, чемпион России
            по мини-футболу, чемпион Всероссийских соревнований - Уличная Классика23 и четырехкратный призер соревнований по футбольному
            фристайлу среди стран СНГ - Фаридонов Ришат. Тренерский стаж: 6 лет`}
      />
      <p className={styles.text}>
        Так же у Вас есть возможность записаться на индивидуальные занятия. В
        данном случае ведётся полный контроль за прогрессом и успехами ученика.
        Все вопросы решаются в индивидуальном порядке, что очень полезно , если
        необходимо подготовить футболиста в короткие сроки или ему просто
        некомфортно заниматься в группе.
      </p>
      <p className={styles.contact}>
        По любым интересующим Вас вопросам Вы можете обращаться по номеру:
        8(912)-272-04-09 - Ришат
      </p>

      <div className={styles.buttonContainer}>
        <Button onClick={showModal} text="ЗАПИСАТЬСЯ" />
      </div>
    </div>
  );
}
