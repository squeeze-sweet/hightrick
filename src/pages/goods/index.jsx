import styles from './index.module.css';
import PhotoCard from '../../components/photo-card';
import Button from '../../components/button';
import Form from '../../components/form';
import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css';
export default function Goods() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);
  return (
    <div className={styles.page}>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <h2 className={styles.header}>наш Мерч</h2>
      <p className={styles.text}>
        Выражайте уникальность и завоевывайте внимание! Наши фирменные футболки
        – это не просто одежда, это выражение свободы и творчества,
        олицетворение стиля и искусства!
      </p>
      <p className={styles.text}>Состав: 100% хлопок</p>

      <div className={styles.swiperContainer}>
        <Swiper
          style={{
            '--swiper-pagination-color': '#d41fa2',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '16px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + '/goods/carousel/1.jpg'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + '/goods/carousel/2.jpg'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + '/goods/carousel/3.jpg'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + '/goods/carousel/4.jpg'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + '/goods/carousel/5.jpg'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + '/goods/carousel/6.jpg'}
              alt="image"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <p className={styles.contact}>
        По любым интересующим Вас вопросам Вы можете обращаться по номеру:
        8(912)-272-04-09 - Ришат
      </p>
    </div>
  );
}
