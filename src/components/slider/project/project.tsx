import ImageSlider from '../image-slider/image-slider';
import styles from './project.module.css';

export default function Project({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  return (
    <div className={styles.item}>
      <ImageSlider images={images} title={title} />

      <span className={styles.title}>{title}</span>
    </div>
  );
}
