import styles from './photo-card.module.css';

export default function PhotoCard({ photoSrc, heading, text, className }) {
  return (
    <div className={`${styles.card} + ${className}`}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + photoSrc}
          alt=""
        />
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
