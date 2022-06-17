import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

const testimonials = [
  { img: '/images/customer-1.jpeg', name: 'chị Hồ Thị Ngọc Thảo ' },
  { img: '/images/customer-2.jpeg', name: 'anh Đặng Tuấn Vũ' },
  { img: '/images/customer-3.png', name: 'anh Nguyễn Ngọc Nhất ' },
  { img: '/images/customer-4.jpeg', name: 'chị Trần Thị Kim Oanh ' }
];

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
                  onSwiper={(swiper) => {
                    slideRef.current = swiper;
                  }}
                  loop
                >
                  {[1, 2, 3, 4].map((element, index) => {
                    const item = testimonials[index];
                    return (
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
                                      src={item?.img}
                                      className="lazy-load attachment-medium size-medium"
                                      alt="Danh gia cua khach hang"
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="icon-box-text last-reset">
                                <div className="star-rating" />
                                <p>
                                  Là khách hàng lâu năm của công ty, tôi rất hài lòng về sản phẩm và dịch vụ chống thấm
                                  của Chống thấm Nguyên Phát
                                </p>
                                <p>
                                  <span style={{ color: '#000000' }}>
                                    <strong className="testimonial-name test_name">{item?.name}</strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
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
            '\n#section_1137954622 {\n  padding-top: 41px;\n  padding-bottom: 41px;\n}\n#section_1137954622 .section-bg.bg-loaded {\n  background-image: url(https://chongthamnguyenphat.com/wp-content/uploads/2018/03/bg-news1.jpg);\n}\n'
        }}
      />
    </section>
  );
};
