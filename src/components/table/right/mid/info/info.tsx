import styles from './info.module.css';

export default function Info() {
  return (
    <>
      <div className={styles.info}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.title}>
              {' '}
              <span className={styles.titleBold}>ОГРН:</span>1121690081853
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.title}>
              <span className={styles.titleBold}>Юр.адрес:</span>420194,
              Республика Татарстан, <br /> г.о.Казань, ул.Короленко, д.115,
              помещ.53
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.title}>
              <span className={styles.titleBold}>Факт.адрес:</span>г.Казань,
              пр.Победы, 139,к1, оф.1004
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.title}>
              <span className={styles.titleBold}>Email:</span>{' '}
              danevopros24@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
