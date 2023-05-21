import Button from '../../components/button';
import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

export default function Home() {
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
    <div className={styles.page}>
      <section className={styles.mainImgContainer}>
        <div className={styles.mainImgTexts}>
          <div className={styles.mainHeadingContainer}>
            <h1 className={styles.mainHeading}>HighTrick</h1>
          </div>

          <p className={styles.p}>Школа фристайла и футбольной техники</p>
        </div>

        <div className={styles.mainImg}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + '/main.png'}
            alt="чел с мячём"
          />
        </div>
      </section>
      <h2 className={styles.secondHeading}>
        Что такое футбольный <br /> фристайл
      </h2>
      <p className={styles.bottomParagraph}>
        Футбольный фристайл - красивый и зрелищный вид спорта, суть которого
        заключается в выполнении различных трюков с футбольным мячом. Для этого
        не нужно иметь талант.
      </p>

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
      </div>
      <div className={styles.buttonContainer}>
        <Button text="ЗАПИСАТЬСЯ" />
      </div>
    </div>
  );
}
