import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

export const Testimomial = ({ data }) => {
  const slideRef = useRef({});
  return (
    <section className="section nhan-xet-khach-hang">
      <div className="bg section-bg fill bg-fill  "></div>
      <div className="section-content relative">
        <div className="row" id="row-1275458088">
          <div id="col-461308424" className="col small-12 large-12">
            <div className="col-inner">
              <div className="tieu-de">
                <h2 style={{ textAlign: 'center' }}>
                  <span style={{ color: 'black' }}>KHÁCH HÀNG ĐÁNH GIÁ</span>
                </h2>
              </div>
              <p style={{ textAlign: 'center' }}>
                <span style={{ color: 'black' }}>
                  Những lời nhận xét của khách hàng là động lực để chúng tôi nâng cao chất lượng dịch vụ hơn và làm hài
                  lòng khách hàng hơn nữa!
                  <br />
                </span>
              </p>

              <div className="relative">
                <Swiper
                  spaceBetween={40}
                  slidesPerView={2}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => {
                    slideRef.current = swiper;
                  }}
                  loop
                >
                  {[1, 2, 3].map((element) => (
                    <SwiperSlide key={element}>
                      <div>
                        <div className="col-inner">
                          <div className="icon-box featured-box icon-box-left text-left">
                            <div className="icon-box-img" style={{ width: 70, height: 70 }}>
                              <div className="icon">
                                <div className="icon-inner">
                                  <img
                                    width={69}
                                    height={69}
                                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269703051_2157214457750670_4429844516692349408_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZDvIP6qd1eAAX_kOvsG&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8Y4UUAiBSfvnhTC8VfA4iMaJHgs-pFmJ5-7K2aLoGwvA&oe=62712B26"
                                    data-src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269703051_2157214457750670_4429844516692349408_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZDvIP6qd1eAAX_kOvsG&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8Y4UUAiBSfvnhTC8VfA4iMaJHgs-pFmJ5-7K2aLoGwvA&oe=62712B26"
                                    className="lazy-load attachment-medium size-medium"
                                    alt=""
                                    loading="lazy"
                                  />{' '}
                                </div>
                              </div>
                            </div>
                            <div className="icon-box-text last-reset">
                              <div className="star-rating" />
                              <p>
                                Là khách hàng lâu năm của công ty, tôi rất hài lòng về sản phẩm và dịch vụ chống thấm
                                của Nhà An Khang
                              </p>
                              <p>
                                <span style={{ color: '#000000' }}>
                                  <strong className="testimonial-name test_name">anh Hồ Quang Tuấn</strong>{' '}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="arrow">
                  <div
                    className="button-left"
                    onClick={() => {
                      slideRef.current.slideNext();
                    }}
                  ></div>
                  <div
                    className="button-right"
                    onClick={() => {
                      slideRef.current.slidePrev();
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n#section_1137954622 {\n  padding-top: 41px;\n  padding-bottom: 41px;\n}\n#section_1137954622 .section-bg.bg-loaded {\n  background-image: url(https://nhaankhang.com/wp-content/uploads/2018/03/bg-news1.jpg);\n}\n'
        }}
      />
    </section>
  );
};
