import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'swiper/css';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';

import styles from './image-slider.module.css';
import { useState } from 'react';

export default function ImageSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const fullSizeImages = images.map((image) => ({
    src: `/projects/${title}/${image}`,
  }));

  return (
    <section>
      <Swiper
        pagination={{ clickable: true }}
        className="mySwiperInner"
        modules={[Pagination]}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              className={`${styles.img} img-inner`}
              src={`/projects/${title}/${image}`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={fullSizeImages}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
          carousel={{ finite: true }}
        />
      )}
    </section>
  );
}
