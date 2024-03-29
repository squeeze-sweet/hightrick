import styles from './index.module.css';
import PhotoWithName from '../../components/photo-with-name';
import { Modal } from 'antd';
import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useWindowSize } from '@uidotdev/usehooks';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css';

export default function Goods() {
  const [isClassicModalOpen, setIsClassicModalOpen] = useState(false);
  const [isDesignerModalOpen, setIsDesignerModalOpen] = useState(false);
  const [displayedImgUrl, setDisplayedImgUrl] = useState('');
  const { width } = useWindowSize();

  const visibleCardsNumber = useMemo(() => {
    if (width < 300) return 1;
    if (width < 600) return 2;
    return 3;
  }, [width]);

  const modalVisibleCardsNumber = useMemo(() => {
    if (width < 1000) return 2;
    if (width < 650) return 1;
    return 3;
  }, [width]);

  const bulletSize = useMemo(() => {
    if (width < 300) return '12px';
    if (width < 600) return '18px';
    return '24px';
  }, [width]);

  const modalWidth = useMemo(() => {
    if (width < 500) return '70%';
    if (width < 650) return '60%';
    if (width < 1000) return '50%';
    if (width < 1400) return '40%';
    return '30%';
  }, [width]);

  return (
    <>
      <Modal
        zIndex={1001}
        footer={null}
        centered
        open={displayedImgUrl}
        onCancel={() => {
          setDisplayedImgUrl('');
        }}
        width={modalWidth}
      >
        <img
          className={styles.modalImage}
          src={process.env.PUBLIC_URL + displayedImgUrl}
          alt=""
        />
      </Modal>

      <Modal
        footer={null}
        centered
        open={isDesignerModalOpen}
        onCancel={() => {
          setIsDesignerModalOpen(false);
        }}
        width={modalWidth}
      >
        <div className={styles.gap} />
        <Swiper
          observer
          observeParents
          parallax
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            '--swiper-pagination-color': '#d41fa2',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': bulletSize,
            '--swiper-pagination-bullet-horizontal-gap': '6px',
            '--swiper-navigation-size': 0,
          }}
          slidesPerView={modalVisibleCardsNumber}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className="12">
            <img
              onClick={() => {
                setDisplayedImgUrl('/design4.png');
              }}
              src={process.env.PUBLIC_URL + '/design4.png'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                setDisplayedImgUrl('/design2.png');
              }}
              src={process.env.PUBLIC_URL + '/design2.png'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                setDisplayedImgUrl('/design3.png');
              }}
              src={process.env.PUBLIC_URL + '/design3.png'}
              alt="image"
            />
          </SwiperSlide>
        </Swiper>
        <p className={styles.modalText}>
          Стиль: Наша дизайнерская футболка обеспечивает комфорт и свободу
          движения <br /> <br /> Эстетика: Не просто футболка, а настоящее
          произведение искусства <br />
          <br /> Детали: Каждая часть футболки имеет значение <br /> <br /> +100
          к стилю
          <br /> +100 к вдохновению <br />
          +100 к креативности
        </p>
        <p className={styles.modalText}>
          <b>Цена: 4 999₽</b>
        </p>
      </Modal>

      <Modal
        footer={null}
        centered
        open={isClassicModalOpen}
        onCancel={() => {
          setIsClassicModalOpen(false);
        }}
        width={modalWidth}
      >
        <div className={styles.gap} />
        <Swiper
          observer
          observeParents
          parallax
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            '--swiper-pagination-color': '#d41fa2',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': bulletSize,
            '--swiper-pagination-bullet-horizontal-gap': '6px',
            '--swiper-navigation-size': 0,
          }}
          slidesPerView={modalVisibleCardsNumber}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img
              onClick={() => {
                setDisplayedImgUrl('/classic1.png');
              }}
              src={process.env.PUBLIC_URL + '/classic1.png'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                setDisplayedImgUrl('/classic2.png');
              }}
              src={process.env.PUBLIC_URL + '/classic2.png'}
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                setDisplayedImgUrl('/classic3.png');
              }}
              src={process.env.PUBLIC_URL + '/classic3.png'}
              alt="image"
            />
          </SwiperSlide>
        </Swiper>
        <p className={styles.modalText}>
          Стиль: Минимализм с особым шармом <br /> <br />
          Эстетика: Фасон футболки подойдет абсолютно каждому <br />
          <br /> Детали: Каждая часть футболки имеет значение <br /> <br />
          +100 к комфорту <br />
          +100 к уверенности <br />
          +100 к уникальности
        </p>
        <p className={styles.modalText}>
          <b>Цена: 1 999₽</b>
        </p>
      </Modal>
      <div className={styles.page}>
        <h2 className={styles.header}>наш Мерч</h2>
        <div className={styles.swiperContainer}>
          <Swiper
            observer
            observeParents
            parallax
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            style={{
              '--swiper-pagination-color': '#d41fa2',
              '--swiper-pagination-bullet-inactive-color': '#999999',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': bulletSize,
              '--swiper-pagination-bullet-horizontal-gap': '6px',
              '--swiper-navigation-size': 0,
            }}
            slidesPerView={visibleCardsNumber}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <img
                onClick={() => {
                  setDisplayedImgUrl('/c1(1).png');
                }}
                src={process.env.PUBLIC_URL + '/c1(1).png'}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => {
                  setDisplayedImgUrl('/c1(2).png');
                }}
                src={process.env.PUBLIC_URL + '/c1(2).png'}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => {
                  setDisplayedImgUrl('/c1(5).png');
                }}
                src={process.env.PUBLIC_URL + '/c1(5).png'}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => {
                  setDisplayedImgUrl('/c1(3).png');
                }}
                src={process.env.PUBLIC_URL + '/c1(3).png'}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => {
                  setDisplayedImgUrl('/c1(4).png');
                }}
                src={process.env.PUBLIC_URL + '/c1(4).png'}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => {
                  setDisplayedImgUrl('/c1(6).png');
                }}
                src={process.env.PUBLIC_URL + '/c1(6).png'}
                alt="image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className={styles.text}>
          Выражайте уникальность и завоевывайте внимание!
        </p>
        <p className={styles.contact}>
          Наши фирменные футболки – это не просто одежда, это выражение свободы
          и творчества, олицетворение стиля и искусства! <br />{' '}
          <span className={styles.pink}>Состав: 100% хлопок.</span>
        </p>

        <div className={styles.goodsContainer}>
          <PhotoWithName
            photoSrc={'/design1.png'}
            heading="Дизайнерская футболка"
            onClick={() => {
              setIsDesignerModalOpen(true);
            }}
          />
          <PhotoWithName
            photoSrc={'/classic1.png'}
            heading="Классическая футболка"
            onClick={() => {
              setIsClassicModalOpen(true);
            }}
          />
        </div>

        <p className={styles.contact}>
          По любым интересующим Вас вопросам Вы можете обращаться по номеру:
          8(912)-272-04-09 - Ришат
        </p>
      </div>
    </>
  );
}
