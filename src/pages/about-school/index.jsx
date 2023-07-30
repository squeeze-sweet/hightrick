import styles from './index.module.css';
import InfoCard from '../../components/info-card';
import Map from '../../components/map';
import Button from '../../components/button';
import Form from '../../components/form';
import { useCallback, useState } from 'react';

export default function AboutSchool() {
  return (
    <div className={styles.page}>
      <h2 className={styles.header}>о нашей школе</h2>
      <p className={styles.locationInfo}>
        Мы находимся по адресу: <br /> г. Екатеринбург <br /> Куйбышева 32а к1,
        ДС “Снежинка”
      </p>

      <div className={styles.mapContainer}>
        <Map />
      </div>
      <section className={styles.info}>
        <div className={styles.left}>
          <h3>Стоимость занятий</h3>
          <InfoCard heading="Первая тренировка" text="Бесплатно" highlighted />
          <InfoCard heading="Разовое посещение" text="500 рублей" />
          <InfoCard
            heading="Абонемент на месяц"
            text="3000 рублей (2 раза в неделю)"
          />
        </div>
        <div className={styles.left}>
          <h3>Расписание</h3>
          <InfoCard heading="Суббота:" text="c 19:30 до 20:30" />
          <InfoCard heading="Воскресенье:" text="c 19:30 до 20:30" />
        </div>
      </section>
    </div>
  );
}
