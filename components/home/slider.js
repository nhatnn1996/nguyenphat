import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInfo } from 'context/info';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = () => {
  const { sliders } = useInfo();

  return (
    <div className="slider-wrapper relative">
      <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} navigation={{ clickable: true }}>
        {sliders.map((element) => (
          <SwiperSlide key={element}>
            <div className="img-inner image-cover dark" style={{ paddingTop: '40%' }}>
              <img
                width={'100%'}
                height={'100vh'}
                src={element}
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
