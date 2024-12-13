import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../Photo/Photo.css';

const Photo = () => {
  return (
    <section className="photo-gallery">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={
          { delay: 2500, disableOnInteraction: true }
        }
        
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/20/c7/0f/20c70f35e8213e601e495792e68b852e.jpg" alt="Photo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/b5/72/9f/b5729f672579c1d5ac9e0452b1b9eb1c.jpg" alt="Photo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/f8/e2/1e/f8e21ef6768a2be87c18cb5b46a37e54.jpg" alt="Photo 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/c6/1f/bb/c61fbbc3cb74b47f90e0e390aca8d8f4.jpg" alt="Photo 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/43/cb/24/43cb24f3991b954b50f3ecded4b9248b.jpg" alt="Photo 5" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Photo;