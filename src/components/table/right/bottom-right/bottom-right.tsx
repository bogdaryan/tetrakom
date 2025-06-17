import styles from './bottom-right.module.css';

export default function BottomRight() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <img className={styles.logo} src="/svg/logo.svg" alt="logo" />
        <span className={styles.title}>Тетраком</span>
      </div>
      <div className={styles.empyBox}></div>
    </div>
  );
}
