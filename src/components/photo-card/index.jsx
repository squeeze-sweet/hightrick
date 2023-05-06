import styles from "./photo-card.module.css";

export default function PhotoCard({ photoSrc, heading, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img className={styles.img} src={photoSrc} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.heading}>{heading}</h4>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
