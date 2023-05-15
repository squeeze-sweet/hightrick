import styles from './photo-card.module.css';

export default function PhotoCard({ photoSrc, heading, text, className }) {
  return (
    <div className={`${styles.card} + ${className}`}>
      <img
        className={styles.img}
        src={process.env.PUBLIC_URL + photoSrc}
        alt=""
      />

      <div className={styles.textContainer}>
        <h3 className={styles.heading}>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
