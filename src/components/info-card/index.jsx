import styles from './info-card.module.css';
import cn from 'classnames';
import isArray from 'lodash/isArray';
export default function InfoCard({ heading, text, highlighted = false }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.heading}>{heading}</h4>
      {isArray(text) ? (
        text.map((oneText) => (
          <p className={cn(styles.text, { [styles.pink]: highlighted })}>
            {oneText}
          </p>
        ))
      ) : (
        <p className={cn(styles.text, { [styles.pink]: highlighted })}>
          {text}
        </p>
      )}
    </div>
  );
}
