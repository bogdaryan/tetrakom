import Header from './components/header/header';
import styles from './app.module.css';
import Slider from './components/slider/slider';
import Table from './components/table/table';

function App() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.a4}>
          <Header />
          <h1 className={styles.title}>
            Специализированный подрядчик по навесным вентилируемым фасадам ООО
            «Тетраком»
          </h1>
          <main>
            <Slider />
          </main>
          <Table />
        </div>
        <section className={styles.outside}>
          <span className={styles.textBottom}>Копировал</span>
          <span className={styles.textBottom}>Формат А4</span>
        </section>
      </div>
    </section>
  );
}

export default App;
