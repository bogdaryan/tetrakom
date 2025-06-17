import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './image-slider.module.css';

export default function ImageSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <section>
      <Swiper
        pagination={{
          clickable: true,
        }}
        className="mySwiperInner"
        modules={[Pagination]}
      >
        {images.map((image) => {
          return (
            <SwiperSlide>
              <img
                className={`${styles.img} img-inner`}
                src={`/projects/${title}/${image}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
