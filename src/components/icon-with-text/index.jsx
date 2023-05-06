import styles from './icon-with-text.module.css';

export default function IconWithText({ iconScr, text }) {
  return (
    <button className={styles.container}>
      <img className={styles.img} src={iconScr} alt="" />
      <p className={styles.text}>{text}</p>
    </button>
  );
}
