import Button from '../../components/button';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.mainImgContainer}>
        <div className={styles.mainImgTexts}>
          <h1>Hightrick</h1>
          <p className={styles.p}>Школа фристайла и футбольной техники</p>
        </div>

        <div className={styles.mainImg}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + '/main.png'}
            alt="чел с мячём"
          />
        </div>
      </section>
      <h2>
        Что такое футбольный <br /> фристайл
      </h2>
      <p className={styles.bottomParagraph}>
        Футбольный фристайл - красивый и зрелищный вид спорта, суть которого
        заключается в выполнении различных трюков с футбольным мячом. Для этого
        не нужно иметь талант.
      </p>
      <div className={styles.balls}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + '/balls.png'}
          alt="чисто мячи"
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button text="ЗАПИСАТЬСЯ" />
      </div>
    </>
  );
}
