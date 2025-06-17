import styles from './buttom.module.css';

export default function Bottom() {
  return (
    <div className={styles.buttom}>
      <ul className={styles.list}>
        <li className={`${styles.title} ${styles.item}`}>Разраб.</li>
        <li className={`${styles.title} ${styles.item}`}>Пров.</li>
        <li className={`${styles.title} ${styles.item}`}>Т.контр.</li>
        <li className={`${styles.title} ${styles.item}`}></li>
        <li className={`${styles.title} ${styles.item}`}>Н.контр.</li>
        <li className={`${styles.title} ${styles.item}`}>Утв.</li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
      </ul>
    </div>
  );
}
