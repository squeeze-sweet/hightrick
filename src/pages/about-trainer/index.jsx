import styles from './index.module.css';
import PhotoCard from '../../components/photo-card';
import Button from '../../components/button';
import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';

export default function AboutTrainer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && !isPlaying) {
      const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const imageElement = videoRef.current;
        if (imageElement) {
          const { top, bottom, height } = imageElement.getBoundingClientRect();
          const imagePosition = top + height / 2;
          const isCentered =
            imagePosition >= viewportHeight / 2 &&
            imagePosition <= viewportHeight / 2 + 1; // Устанавливаем погрешность в 1 пиксель
          setIsPlaying(true);
        }
      };
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [videoRef.current, isPlaying]);

  return (
    <>
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

      <div ref={videoRef} className={styles.iframeContainer}>
        <div className={styles.iframeFiller}> </div>
        <ReactPlayer
          url="https://www.youtube.com/embed/w6iHoQXTSYA"
          playing={isPlaying}
          muted={!isPlaying}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        ></ReactPlayer>
        {/*  <iframe
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          src="https://www.youtube.com/embed/w6iHoQXTSYA"
          title="HighTrick school"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
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
      <div className={styles.buttonContainer}>
        <Button text="ЗАПИСАТЬСЯ" />
      </div>
    </>
  );
}
