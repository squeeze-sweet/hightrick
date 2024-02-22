import styles from './index.module.css';
import PhotoCard from '../../components/photo-card';
import Button from '../../components/button';
import Form from '../../components/form';
import { useCallback, useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useWindowSize } from '@uidotdev/usehooks';

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

  const { width } = useWindowSize();

  const visibleCardsNumber = useMemo(() => {
    if (width < 300) return 1;
    if (width < 600) return 2;
    return 3;
  }, [width]);

  const bulletSize = useMemo(() => {
    if (width < 300) return '6px';
    if (width < 600) return '8px';
    return '16px';
  }, [width]);

  const arrowSize = useMemo(() => {
    if (width < 300) return '34px';
    if (width < 600) return '24px';
    return '44px';
  }, [width]);

  console.log(width);
  return (
    <div className={styles.page}>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <h2 className={styles.header}>наш Мерч</h2>
      <div className={styles.swiperContainer}>
        <Swiper
          style={{
            '--swiper-pagination-color': '#d41fa2',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': bulletSize,
            '--swiper-pagination-bullet-horizontal-gap': '6px',
            '--swiper-navigation-size': arrowSize,
          }}
          slidesPerView={visibleCardsNumber}
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
            <img src={process.env.PUBLIC_URL + '/c1(1).png'} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/c1(2).png'} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/c1(5).png'} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/c1(3).png'} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/c1(4).png'} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/c1(6).png'} alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <p className={styles.text}>
        Выражайте уникальность и завоевывайте внимание!
      </p>
      <p className={styles.contact}>
        Наши фирменные футболки – это не просто одежда, это выражение свободы и
        творчества, олицетворение стиля и искусства! <br /> Состав: 100% хлопок.
      </p>
      <p className={styles.contact}>
        По любым интересующим Вас вопросам Вы можете обращаться по номеру:
        8(912)-272-04-09 - Ришат
      </p>
    </div>
  );
}
