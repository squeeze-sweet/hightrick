import styles from "./photo-with-name.module.css";

export default function PhotoWithName({
  photoSrc,
  heading,
  onClick,
  className,
}) {
  return (
    <div className={`${styles.card} + ${className}`} onClick={onClick}>
      <img
        className={styles.img}
        src={process.env.PUBLIC_URL + photoSrc}
        alt=""
      />

      <h3 className={styles.heading}>{heading}</h3>
    </div>
  );
}
