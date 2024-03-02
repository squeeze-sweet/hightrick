import styles from './index.module.css';
import InfoCard from '../../components/info-card';
import Map from '../../components/map';
import Button from '../../components/button';
import Form from '../../components/form';
import { useCallback, useState } from 'react';

export default function AboutSchool() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <div className={styles.page}>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <h2 className={styles.header}>о нашей школе</h2>
      <p className={styles.locationInfo}>
        Мы находимся по адресу: <br /> г. Екатеринбург <br /> Куйбышева 32а к1,
        ДС “Снежинка”
      </p>
      <section className={styles.info}>
        <div className={styles.left}>
          <h3>Стоимость занятий</h3>
          <InfoCard heading="Первая тренировка" text="Бесплатно" highlighted />
          <InfoCard heading="Разовое посещение" text="600 рублей" />
          <InfoCard
            heading="Абонемент на месяц"
            text={[
              '• 3500 рублей (2 раза в неделю)',
              '• 5250 рублей (3 раза в неделю)',
            ]}
          />
        </div>
        <div className={styles.left}>
          <h3>Расписание</h3>
          <InfoCard
            heading="Суббота:"
            text={['• c 18:30 до 19:30 ', '• c 19:30 до 20:30 ']}
          />
          <InfoCard heading="Воскресенье:" text="• c 19:45 до 20:45" />
        </div>
      </section>
      <div className={styles.mapContainer}>
        <Map />
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={showModal} text="ЗАПИСАТЬСЯ" />
      </div>
    </div>
  );
}
