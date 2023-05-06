import styles from "./info-card.module.css";

export default function InfoCard({ heading, text }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.heading}>{heading}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
