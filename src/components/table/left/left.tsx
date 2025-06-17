import Up from './up/up';
import Buttom from './bottom/bottom';
import styles from './left.module.css';

export default function Left() {
  return (
    <div className={styles.container}>
      <Up />
      <Buttom />
    </div>
  );
}
