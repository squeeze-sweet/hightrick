import styles from './photo-card.module.css';

export default function PhotoCardSmall({ photoSrc, heading, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + photoSrc}
          alt=""
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.heading}>{heading}</h3>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
