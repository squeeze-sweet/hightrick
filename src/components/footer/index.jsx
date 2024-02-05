import styles from './footer.module.css';
import IconWithText from '../icon-with-text';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className={styles.container}>
      <button className={styles.left} onClick={handleLogoClick}>
        <div className={styles.logoContainer}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + '/logo.svg'}
            alt=""
          />
          <p className={styles.logoText}>Hightrick</p>
        </div>
      </button>
      <div className={styles.right}>
        <IconWithText
          iconScr={'/vk.svg'}
          text="Vkontakte"
          href="https://vk.com/hightrick_school"
        />
        <IconWithText
          iconScr={'/youtube.svg'}
          text="YouTube"
          href="https://www.youtube.com/channel/UCNVTADsJOt0RBDeGEbTSEsQ"
        />
        <IconWithText
          iconScr={'/telegram.svg'}
          text="telegram"
          href="https://t.me/HighTrickSchool"
        />
        <IconWithText iconScr={'/whatsapp.svg'} text="+7(912) 272-04-09" />
        <IconWithText iconScr={'/gmail.svg'} text="hightrick@mail.ru" />
      </div>
    </section>
  );
}
