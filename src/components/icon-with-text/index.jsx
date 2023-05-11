import styles from './icon-with-text.module.css';
import cn from 'classnames';
export default function IconWithText({ iconScr, text, href }) {
  return (
    <button className={cn(styles.container, { [styles.clickable]: href })}>
      <img
        className={styles.img}
        src={process.env.PUBLIC_URL + iconScr}
        alt=""
      />
      <a className={styles.text} href={href}>
        {text}
      </a>
    </button>
  );
}
