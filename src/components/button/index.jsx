import styles from './button.module.css';

export default function Button({ text }) {
  return (
    <button className={styles.container}>
      <p className={styles.text}>{text}</p>
    </button>
  );
}
