import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = () => {
  return (
    <div className="slider-wrapper relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ clickable: true }}
      >
        {[1, 2, 3].map((element) => (
          <SwiperSlide key={element}>
            <div className="img-inner image-cover dark" style={{ paddingTop: '40%' }}>
              <img
                width={'100%'}
                height={'100vh'}
                src="/images/banner.jpg"
                className="attachment-original size-original lazy-load-active"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="loading-spin dark large centered" style={{ display: 'none' }} />
    </div>
  );
};
