import styles from './info-card.module.css';
import cn from 'classnames';
export default function InfoCard({ heading, text, highlighted = false }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.heading}>{heading}</h4>
      <p className={cn(styles.text, { [styles.pink]: highlighted })}>{text}</p>
    </div>
  );
}
