import styles from './footer.module.css';
import IconWithText from '../icon-with-text';
export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + '/logo.svg'}
          alt=""
        />
        <p className={styles.logoText}>Hightrick</p>
      </div>
      <div className={styles.right}>
        <IconWithText
          iconScr={process.env.PUBLIC_URL + '/whatsapp.svg'}
          text="+7(912) 272-04-09"
        />
        <IconWithText
          iconScr={process.env.PUBLIC_URL + '/vk.svg'}
          text="Vkontakte"
        />
        <IconWithText
          iconScr={process.env.PUBLIC_URL + '/youtube.svg'}
          text="YouTube"
        />
        <IconWithText
          iconScr={process.env.PUBLIC_URL + '/gmail.svg'}
          text="Gmail"
        />
      </div>
    </section>
  );
}
