import styles from './footer.module.css';
import IconWithText from '../icon-with-text';
export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img className={styles.img} src={'/logo.svg'} alt="" />
        <p className={styles.logoText}>Hightrick</p>
      </div>
      <div className={styles.right}>
        <IconWithText iconScr={'/whatsapp.svg'} text="+7(912) 272-04-09" />
        <IconWithText iconScr={'/vk.svg'} text="Vkontakte" />
        <IconWithText iconScr={'/youtube.svg'} text="YouTube" />
        <IconWithText iconScr={'/gmail.svg'} text="Gmail" />
      </div>
    </section>
  );
}
