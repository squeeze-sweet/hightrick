import Button from '../../components/button';
import ReactPlayer from 'react-player';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './index.module.css';

import Form from '../../components/form';

export default function Home({ setActivNavLink }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const enableSound = () => {
        setIsMuted(false);
      };

      const handleAnimation = () => {
        if (
          videoRef.current &&
          videoRef.current.getBoundingClientRect().top <= window.innerHeight
        ) {
          enableSound();
        } else {
          window.requestAnimationFrame(handleAnimation);
        }
      };

      window.requestAnimationFrame(handleAnimation);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current && !isPlaying) {
      const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const videoElement = videoRef.current;
        if (videoElement) {
          const { top, bottom, height } = videoElement.getBoundingClientRect();
          const videoPosition = top + height / 2;
          const isCentered = videoPosition < viewportHeight;
          setIsPlaying(isCentered); // Start the video when it is centered
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
          setActivNavLink('home');
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

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <div className={styles.page} ref={constNavControllElement}>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

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
          controls
          volume={0.1}
          url="https://www.youtube.com/embed/w6iHoQXTSYA"
          playing={isPlaying}
          muted={isMuted}
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
        <Button onClick={showModal} text="ЗАПИСАТЬСЯ" />
      </div>
    </div>
  );
}
