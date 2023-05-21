import PhotoCard from '../../components/photo-card';
import SmallCard from '../../components/photo-card-small';
import Button from '../../components/button';

import styles from './index.module.css';

export default function FirstLesson() {
  return (
    <div className={styles.page}>
      <h2 className={styles.header}>чему вы научитесь</h2>
      <p className={styles.text}>
        На занятиях по фристайлу мы обучаем чеканке и трюкам футбольного
        фристайла, а также уделяем внимание работе над техническими навыками
        футболиста и его индивидуальному мастерству на тренировках по технике.
      </p>
      <div className={styles.skills}>
        <SmallCard
          photoSrc={'/cup.svg'}
          heading="Дисциплины"
          text="Разностороннее развитие фристайлера:
        Upper (Трюки на шее и голове)
        Lower (Выполнение трюков с чеканки)
        Sitting (трюки с чеканки сидя)"
        />
        <SmallCard
          photoSrc={'/hands.svg'}
          heading="Совершенствование"
          text="Индивидуальный подход к каждому ученику, отслеживание прогресса и подготовка к соревнованиям"
        />
        <SmallCard
          photoSrc={'/ball.svg'}
          heading="Футбольная техника"
          text="Обучение чеканке, работа над техническики навыками игрока и развитие его индивидуального мастерства"
        />
      </div>
      <h2 className={styles.secondHeader}>Что взять на тренировку</h2>
      <section className={styles.cards}>
        <PhotoCard
          photoSrc={'/photo3_1.png'}
          heading="Мяч"
          text={`Ваш главный инструмент. Большинство фристайлеров используют
              профессиональные мячи, преимущественно фирмы Adidas,
              прославившиеся своим зацепом и удобством для любого стиля. Если у
              Вас нет профессионального, для начала подойдёт любой футбольный
              мяч`}
        />
        <PhotoCard
          photoSrc={'/photo3_2.png'}
          heading="Спортивная одежда и обувь"
          text={`Берите с собой спортивную одежду и обувь, в которой удобно
              работать с мячом - желательно с гладкой подошвой. Впоследствии Вы
              подберете наиболее удобную обувь для занятий, исходя из личного
              опыта и совета опытных фристайлеров`}
        />
        <PhotoCard
          photoSrc={'/photo3_3.png'}
          heading="Вода"
          text={`Полноценная тренировка никогда не обойдётся без бутылки воды. Во
              время занятий очень важно пополнять водный запас для наиболее
              продуктивной работы`}
        />
      </section>

      <div className={styles.buttonContainer}>
        <Button text="ЗАПИСАТЬСЯ" />
      </div>
    </div>
  );
}
