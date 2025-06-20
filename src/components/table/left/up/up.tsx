import styles from './up.module.css';

export default function Up() {
  return (
    <div className={styles.up}>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={`${styles.textLeft} ${styles.title} ${styles.item}  `}>
          Изм.
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={`${styles.textLeft} ${styles.title} ${styles.item} `}>
          Лист
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={`${styles.title} ${styles.item}`}>№ докум.</li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={`${styles.title} ${styles.item}`}>Подп.</li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={`${styles.title} ${styles.item}`}>Дата</li>
      </ul>
    </div>
  );
}
