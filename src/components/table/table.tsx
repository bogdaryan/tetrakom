import Left from './left/left';
import Right from './right/right';

import styles from './table.module.css';

export default function Table() {
  return (
    <footer className={styles.footer}>
      <Left />
      <Right />
    </footer>
  );
}
