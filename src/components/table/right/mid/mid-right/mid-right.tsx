import styles from './mid-right.module.css';

export default function MidRight() {
  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.title}>Лит</span>
          <div className={styles.columns}>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
          </div>
        </li>
        <li className={styles.item}>
          <span className={styles.title}>Масса</span>
          <span className={styles.number}>100+</span>
        </li>
        <li className={styles.item}>
          <span className={`${styles.title} ${styles.pseudoSpan}`}></span>
          <span className={`${styles.number} ${styles.oneToOne}`}>1:1</span>
        </li>
      </ul>
      <div className={styles.bottom}>
        <div className={`${styles.bottomText} ${styles.leftText}`}>Лист 1</div>
        <div className={`${styles.bottomText} ${styles.leftText}`}>
          Листов 1
        </div>
      </div>
    </div>
  );
}
