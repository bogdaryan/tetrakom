import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Project from './project/project';

import 'swiper/css';
import 'swiper/css/pagination';
import { projects } from '../../data/project';
import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Наши объекты</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={30}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        allowTouchMove={false}
        className="mySwiperOut"
        breakpoints={{
          200: {
            slidesPerView: 2,
            allowTouchMove: true,
          },
          425: {
            slidesPerView: 2,
            allowTouchMove: true,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide>
              <Project title={project.title} images={project.images} />
            </SwiperSlide>
          );
        })}
        <div className={styles.navigation}>
          <img
            src="/svg/prev.svg"
            className={`swiper-button-prev-custom ${styles.btnPrev}`}
          />
          <img
            src="/svg/next.svg"
            className={`swiper-button-next-custom ${styles.btnNext}`}
          />
        </div>
      </Swiper>
    </section>
  );
}
