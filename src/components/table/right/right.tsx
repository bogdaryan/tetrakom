import Info from './mid/info/info';
import styles from './right.module.css';
import MidRight from './mid/mid-right/mid-right';
import BottomRight from './bottom-right/bottom-right';

export default function Right() {
  return (
    <section className={styles.section}>
      <div className={styles.inn}>ИНН 1661034770</div>
      <div className={styles.mid}>
        <Info />
        <MidRight />
      </div>
      <BottomRight />
    </section>
  );
}
