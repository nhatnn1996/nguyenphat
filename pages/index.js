import React, { useEffect } from 'react';
import { Service, ProductCom, ProductsCom, Video, Slider } from '@/components/home/index';
import { apollo } from '@/api/index';
import { homeGQL } from '@/geters/home';

export async function getStaticProps() {
  const result = await apollo.query({ query: homeGQL });
  const props = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    props[key] = element?.nodes || [];
  });

  const { menuItems, posts, products } = props;
  const waterproofing = []; // không thấm nước
  const accessories = []; // phụ kiện

  // split the products list into waterproofing group and accessories group
  products.forEach((element) => {
    const listCategory = element.productCategories?.edges || [];
    const item = listCategory.find((element) => element.node.slug === 'san-pham-chong-tham');
    if (item) {
      if (waterproofing.length < 8) waterproofing.push(element);
    } else {
      if (accessories.length < 8) accessories.push(element);
    }
  });

  return { props: { menuItems, posts, waterproofing, accessories }, revalidate: 10 * 60 * 1000 };
}

export default function Home(props) {
  const { posts, waterproofing, accessories } = props;
  return (
    // <a className="skip-link screen-reader-text" href="#main">
    //   Skip to content
    // </a>
    <>
      <main id="main" className="">
        <div id="content" role="main" className="content-area">
          <Slider />
          <section className="section dich-vu-san-pham" id="section_1421784380">
            <div className="bg section-bg fill bg-fill bg-loaded"></div>
            <div className="section-content relative">
              <div className="row" id="row-1180294481">
                <div id="col-752170601" className="col hide-for-small small-12 large-12">
                  <div className="col-inner text-center">
                    <div className="tieu-de">
                      <h2 style={{ textAlign: 'center' }}>
                        <span style={{ color: '#000000' }}>
                          TẠI SAO <span style={{ color: '#ff0000' }}>NÊN CHỌN CHÚNG TÔI?</span>
                        </span>
                      </h2>
                    </div>
                    <div
                      id="gap-314720765"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-314720765 {\n  padding-top: 10px;\n}\n'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="row-261932049">
                <div id="col-39344610" className="col hide-for-small medium-3 small-12 large-3">
                  <div className="col-inner">
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: 80 }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={100}
                              height={100}
                              src="https://nhaankhang.com/wp-content/uploads/2018/03/Local-seo.png"
                              data-src="https://nhaankhang.com/wp-content/uploads/2018/03/Local-seo.png"
                              className="attachment-medium size-medium lazy-load-active"
                              alt=""
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <h3>Cung cấp sỉ và lẻ</h3>
                        <p>
                          <span style={{ fontSize: '90%' }}>
                            Hàng hóa luôn nhiều và đủ cung cấp cho mọi khách hàng. Với chính sách giá sỉ và lẻ đều có
                            nhiều ưu đãi.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      id="gap-54754290"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-54754290 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                    <div
                      id="gap-1529778845"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-1529778845 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div id="col-1610140310" className="col hide-for-small medium-3 small-12 large-3">
                  <div className="col-inner">
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: 80 }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={100}
                              height={100}
                              src="https://nhaankhang.com/wp-content/uploads/2018/03/map.png"
                              data-src="https://nhaankhang.com/wp-content/uploads/2018/03/map.png"
                              className="attachment-medium size-medium lazy-load-active"
                              alt=""
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <h3>Nhập khẩu Đài Loan – Hàn Quốc</h3>
                        <p>
                          <span style={{ fontSize: '104%' }}>
                            Nói không với hàng trôi nổi, hàng Trung Quốc, tất cả sản phẩm đều được nhập khẩu chính
                            ngạch, có CO, CQ kiểm định chất lượng sản phẩm
                          </span>
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                    <div
                      id="gap-1931254594"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-1931254594 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                    <div
                      id="gap-197808505"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-197808505 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div id="col-1864456353" className="col hide-for-small medium-3 small-12 large-3">
                  <div className="col-inner">
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: 80 }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={100}
                              height={100}
                              src="https://nhaankhang.com/wp-content/uploads/2018/03/pair-ads.png"
                              data-src="https://nhaankhang.com/wp-content/uploads/2018/03/pair-ads.png"
                              className="attachment-medium size-medium lazy-load-active"
                              alt=""
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <h3>Hàng 100% chính hãng</h3>
                        <p>
                          <span style={{ fontSize: '90%' }}>
                            Không một sản phẩm nào bị buông lỏng khâu quản lý chất lượng, đặc biệt 100% đều chính hãng.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      id="gap-191724933"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-191724933 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                    <div
                      id="gap-1520482474"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-1520482474 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div id="col-1650652205" className="col hide-for-small medium-3 small-12 large-3">
                  <div className="col-inner">
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: 80 }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={300}
                              height={300}
                              src="https://nhaankhang.com/wp-content/uploads/2019/06/shield-300x300.png"
                              data-src="https://nhaankhang.com/wp-content/uploads/2019/06/shield-300x300.png"
                              className="attachment-medium size-medium lazy-load-active"
                              alt=""
                              loading="lazy"
                              srcSet="https://nhaankhang.com/wp-content/uploads/2019/06/shield-300x300.png 300w, https://nhaankhang.com/wp-content/uploads/2019/06/shield-150x150.png 150w, https://nhaankhang.com/wp-content/uploads/2019/06/shield-100x100.png 100w, https://nhaankhang.com/wp-content/uploads/2019/06/shield.png 512w"
                              data-srcset="https://nhaankhang.com/wp-content/uploads/2019/06/shield-300x300.png 300w, https://nhaankhang.com/wp-content/uploads/2019/06/shield-150x150.png 150w, https://nhaankhang.com/wp-content/uploads/2019/06/shield-100x100.png 100w, https://nhaankhang.com/wp-content/uploads/2019/06/shield.png 512w"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <h3>Bảo hành kim cương</h3>
                        <p>
                          <span style={{ fontSize: '90%' }}>
                            Các công trình đều được bảo hành 3-5 năm và cam kết hoàn tiền nếu không hài lòng về chế độ
                            bảo hành
                            <br />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      id="gap-626502107"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-626502107 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                    <div
                      id="gap-101095690"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '\n#gap-101095690 {\n  padding-top: 30px;\n}\n'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="row-2062644196">
                <div id="col-2132052730" className="col hide-for-small medium-3 small-6 large-3">
                  <div className="col-inner"></div>
                </div>
                <div id="col-1155753117" className="col medium-3 small-6 large-3">
                  <div className="col-inner">
                    <a
                      href="#"
                      target="_self"
                      className="button alert is-large lowercase expand"
                      style={{ borderRadius: 4 }}
                    >
                      <i className="icon-star" /> <span>Tư vấn bán hàng</span>
                    </a>
                  </div>
                </div>
                <div id="col-764486781" className="col medium-3 small-6 large-3">
                  <div className="col-inner">
                    <a
                      href="#"
                      target="_self"
                      className="button success is-large lowercase expand"
                      style={{ borderRadius: 4 }}
                    >
                      <i className="icon-gift" /> <span>Đăng ký làm đại lý</span>
                    </a>
                  </div>
                </div>
                <div id="col-2099641717" className="col hide-for-small medium-3 small-6 large-3">
                  <div className="col-inner"></div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: '\n#section_1421784380 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n'
              }}
            />
          </section>
          <Service data={posts} />
          <ProductCom data={waterproofing} />
          <ProductsCom data={accessories} />
          <Video />

          <section className="section cam-ket" id="section_602094206">
            <div className="bg section-bg fill bg-fill  ">
              <div className="section-bg-overlay absolute fill" />
            </div>
            <div className="section-content relative">
              <div className="row" id="row-1085883883">
                <div id="col-1756099129" className="col small-12 large-12">
                  <div className="col-inner dark">
                    <p style={{ textAlign: 'center' }}>
                      <strong>
                        <span style={{ fontSize: '120%' }}>
                          <span style={{ fontSize: '120%' }}>CHÚNG TÔI CAM KẾT CHỈ BÁN HÀNG CHÍNH HÃNG</span>
                          <br />
                        </span>
                      </strong>
                      Sản phẩm của chúng tôi đều là sản phẩm chính hãng, nhập khẩu từ các thị trường Đài Loan, Hàn
                      Quốc,…nói không với hàng trôi nổi kém chất lượng trên thị trường. Giá cả cạnh tranh, hợp lý với
                      chất lượng. Khách sỉ, đại lý được chiết khấu cao theo doanh số, hỗ trợ tư vấn sản phẩm và công
                      trình miễn phí.
                    </p>
                  </div>
                </div>
                <div id="col-486799393" className="col medium-1 small-12 large-1">
                  <div className="col-inner"></div>
                </div>
                <div id="col-13678866" className="col medium-10 small-12 large-10">
                  <div className="col-inner">
                    <div className="row" id="row-821149920">
                      <div id="col-633674386" className="col medium-4 small-12 large-4">
                        <div className="col-inner">
                          <a
                            href="tel:+090.848.5861"
                            target="_self"
                            className="button alert is-large lowercase expand"
                            style={{ borderRadius: 99 }}
                          >
                            <i className="icon-phone" /> <span>Hotline: 090.848.5861</span>
                          </a>
                        </div>
                      </div>
                      <div id="col-1854550985" className="col medium-4 small-12 large-4">
                        <div className="col-inner">
                          <a
                            href="tel:+84972939830"
                            target="_self"
                            className="button success is-large lowercase expand"
                            style={{ borderRadius: 99 }}
                          >
                            <i className="icon-checkmark" /> <span>nhaankhang224@gmail.com</span>
                          </a>
                        </div>
                      </div>
                      <div id="col-1171345885" className="col medium-4 small-12 large-4">
                        <div className="col-inner">
                          <a
                            href="#"
                            target="_self"
                            className="button primary is-large lowercase expand"
                            style={{ borderRadius: 99 }}
                          >
                            <i className="icon-facebook" /> <span>Chat Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col-278929721" className="col medium-1 small-12 large-1">
                  <div className="col-inner"></div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n#section_602094206 {\n  padding-top: 35px;\n  padding-bottom: 35px;\n  background-color: rgb(0, 145, 209);\n}\n#section_602094206 .section-bg-overlay {\n  background-color: rgba(0, 0, 0, 0.77);\n}\n#section_602094206 .section-bg.bg-loaded {\n  background-image: url(https://nhaankhang.com/wp-content/uploads/2018/03/slider-img3-1.jpg);\n}\n'
              }}
            />
          </section>
          <section className="section nhan-xet-khach-hang" id="section_1137954622">
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
                        Những lời nhận xét của khách hàng là động lực để chúng tôi nâng cao chất lượng dịch vụ hơn và
                        làm hài lòng khách hàng hơn nữa!
                        <br />
                      </span>
                    </p>
                    <div className="slider-wrapper relative" id="slider-560785480">
                      <div
                        className="slider slider-nav-simple slider-nav-normal slider-nav-dark slider-nav-outside slider-style-normal is-draggable flickity-enabled"
                        data-flickity-options='{
      "cellAlign": "center",
      "imagesLoaded": true,
      "lazyLoad": 1,
      "freeScroll": false,
      "wrapAround": true,
      "autoPlay": 6000,
      "pauseAutoPlayOnHover" : true,
      "prevNextButtons": true,
      "contain" : true,
      "adaptiveHeight" : true,
      "dragThreshold" : 10,
      "percentPosition": true,
      "pageDots": false,
      "rightToLeft": false,
      "draggable": true,
      "selectedAttraction": 0.1,
      "parallax" : 0,
      "friction": 0.6        }'
                        tabIndex={0}
                      >
                        <div
                          className="flickity-viewport"
                          style={{
                            height: '137.281px',
                            touchAction: 'pan-y'
                          }}
                        >
                          <div
                            className="flickity-slider"
                            style={{
                              left: 0,
                              transform: 'translateX(0.81%)'
                            }}
                          >
                            <div
                              className="row row-small is-selected"
                              id="row-1594302299"
                              aria-selected="true"
                              style={{ position: 'absolute', left: '0%' }}
                            >
                              <div id="col-324587744" className="col medium-6 small-12 large-6">
                                <div className="col-inner">
                                  <div className="icon-box featured-box icon-box-left text-left">
                                    <div className="icon-box-img" style={{ width: 69 }}>
                                      <div className="icon">
                                        <div className="icon-inner">
                                          <img
                                            width={150}
                                            height={156}
                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20150%20156%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                            data-src="https://nhaankhang.com/wp-content/uploads/2018/03/ho-quang-dung.jpg"
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
                                        Là khách hàng lâu năm của công ty, tôi rất hài lòng về sản phẩm và dịch vụ chống
                                        thấm của Nhà An Khang
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
                              <div id="col-843134349" className="col medium-6 small-12 large-6">
                                <div className="col-inner">
                                  <div className="icon-box featured-box icon-box-left text-left">
                                    <div className="icon-box-img" style={{ width: 69 }}>
                                      <div className="icon">
                                        <div className="icon-inner">
                                          <img
                                            width={150}
                                            height={151}
                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20150%20151%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                            data-src="https://nhaankhang.com/wp-content/uploads/2018/03/nguyen-khanh.jpg"
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
                                        Thời buổi kinh doanh bây giờ tìm được một công ty làm ăn có tâm như công ty Nhà
                                        An Khang không hề dễ dàng, công trình của tôi làm luôn có chế độ bảo hành rất
                                        tôt. Tôi rất tin tưởng công ty, chúc công ty ngày càng phát triển
                                      </p>
                                      <p>
                                        <span style={{ color: '#000000' }}>
                                          <strong className="testimonial-name test_name">anh Nguyễn Thế Hoàng</strong>{' '}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="row row-small"
                              id="row-1252985475"
                              aria-selected="false"
                              style={{
                                position: 'absolute',
                                left: '-98.39%'
                              }}
                            >
                              <div id="col-83483219" className="col medium-6 small-12 large-6">
                                <div className="col-inner">
                                  <div className="icon-box featured-box icon-box-left text-left">
                                    <div className="icon-box-img" style={{ width: 69 }}>
                                      <div className="icon">
                                        <div className="icon-inner">
                                          <img
                                            width={300}
                                            height={300}
                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20300%20300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                            data-src="https://nhaankhang.com/wp-content/uploads/2018/03/11416133_875379979189369_4096461508040968695_n-300x300.jpg"
                                            className="lazy-load attachment-medium size-medium"
                                            alt=""
                                            loading="lazy"
                                            srcSet=""
                                            data-srcset="https://nhaankhang.com/wp-content/uploads/2018/03/11416133_875379979189369_4096461508040968695_n-300x300.jpg 300w, https://nhaankhang.com/wp-content/uploads/2018/03/11416133_875379979189369_4096461508040968695_n-150x150.jpg 150w, https://nhaankhang.com/wp-content/uploads/2018/03/11416133_875379979189369_4096461508040968695_n-768x768.jpg 768w, https://nhaankhang.com/wp-content/uploads/2018/03/11416133_875379979189369_4096461508040968695_n.jpg 960w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                          />{' '}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="icon-box-text last-reset">
                                      <div className="star-rating" />
                                      <p>
                                        Tôi là thầu xây dựng, công trình tôi làm đều qua khâu chống thấm. Máy móc, phụ
                                        kiện hỗ trợ chống thấm tôi mua của Nhà An Khang và chất lượng rất ok. Rất vui vì
                                        được hợp tác với công ty.
                                      </p>
                                      <p>
                                        <span style={{ color: '#000000' }}>
                                          <strong className="testimonial-name test_name">anh Nguyễn Văn Thao</strong>{' '}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="col-36967764" className="col medium-6 small-12 large-6">
                                <div className="col-inner">
                                  <div className="icon-box featured-box icon-box-left text-left">
                                    <div className="icon-box-img" style={{ width: 69 }}>
                                      <div className="icon">
                                        <div className="icon-inner">
                                          <img
                                            width={150}
                                            height={156}
                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20150%20156%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                            data-src="https://nhaankhang.com/wp-content/uploads/2018/03/34.jpg"
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
                                        Tôi mới mua keo chống thấm ở đây, dịch vụ chăm sóc khách hàng rất tốt, tư vấn
                                        tận tâm. Sản phẩm xài cũng rất chất lượng, thời gian bảo hành lâu nên tôi cũng
                                        yên tâm.
                                      </p>
                                      <p>
                                        <span style={{ color: '#000000' }}>
                                          <strong className="testimonial-name test_name">anh Lê Văn Hóa</strong>{' '}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="flickity-button flickity-prev-next-button previous"
                          type="button"
                          aria-label="Previous"
                        >
                          <svg className="flickity-button-icon" viewBox="0 0 100 100">
                            <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" />
                          </svg>
                        </button>
                        <button
                          className="flickity-button flickity-prev-next-button next"
                          type="button"
                          aria-label="Next"
                        >
                          <svg className="flickity-button-icon" viewBox="0 0 100 100">
                            <path
                              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                              className="arrow"
                              transform="translate(100, 100) rotate(180) "
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="loading-spin dark large centered" style={{ display: 'none' }} />
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
          <section className="section tin-tuc" id="section_801061950">
            <div className="bg section-bg fill bg-fill  bg-loaded">
              <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
            </div>
            <div className="section-content relative">
              <div className="row" id="row-22093099">
                <div id="col-581890183" className="col cot10 medium-9 small-12 large-9">
                  <div className="col-inner">
                    <div className="row row1-cot1" id="row-436134977">
                      <div id="col-1595206072" className="col cot1 medium-5 small-12 large-5">
                        <div className="col-inner">
                          <div className="tieu-de-2">
                            <h2>
                              <span style={{ color: '#000000' }}>Tin tức</span>
                            </h2>
                          </div>
                          <div className="row large-columns-1 medium-columns-1 small-columns-1 row-small">
                            <div className="col post-item">
                              <div className="col-inner">
                                <a href="https://nhaankhang.com/chinh-sach-giao-nhan-hang/" className="plain">
                                  <div className="box box-normal box-text-bottom box-blog-post has-hover">
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">CHÍNH SÁCH GIAO – NHẬN HÀNG</h5>
                                        <div className="post-meta is-small op-8">05/06/2021</div>{' '}
                                        <div className="is-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a href="https://nhaankhang.com/chinh-sach-bao-hanh-va-doi-tra/" className="plain">
                                  <div className="box box-normal box-text-bottom box-blog-post has-hover">
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">CHÍNH SÁCH BẢO HÀNH VÀ ĐỔI TRẢ</h5>
                                        <div className="post-meta is-small op-8">05/06/2021</div>{' '}
                                        <div className="is-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a href="https://nhaankhang.com/chinh-sach-thanh-toan/" className="plain">
                                  <div className="box box-normal box-text-bottom box-blog-post has-hover">
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">CHÍNH SÁCH THANH TOÁN</h5>
                                        <div className="post-meta is-small op-8">05/06/2021</div>{' '}
                                        <div className="is-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a href="https://nhaankhang.com/chinh-sach-bao-mat-thong-tin/" className="plain">
                                  <div className="box box-normal box-text-bottom box-blog-post has-hover">
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">CHÍNH SÁCH BẢO MẬT THÔNG TIN</h5>
                                        <div className="post-meta is-small op-8">05/06/2021</div>{' '}
                                        <div className="is-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a href="https://nhaankhang.com/mau-biet-thu-dep/" className="plain">
                                  <div className="box box-normal box-text-bottom box-blog-post has-hover">
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">Mẩu Biệt Thự Đẹp</h5>
                                        <div className="post-meta is-small op-8">08/05/2020</div>{' '}
                                        <div className="is-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a
                                  href="https://nhaankhang.com/goi-y-5-loai-keo-xu-ly-ro-ri-nuoc-tot-nhat-hien-nay/"
                                  className="plain"
                                >
                                  <div className="box box-normal box-text-bottom box-blog-post has-hover">
                                    <div className="box-image">
                                      <div className="image-cover" style={{ paddingTop: '0%' }}>
                                        <img
                                          width={221}
                                          height={300}
                                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20221%20300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                          data-src="https://nhaankhang.com/wp-content/uploads/2019/08/IMG_9415-Edit-221x300.png"
                                          className="lazy-load attachment-medium size-medium wp-post-image"
                                          alt="Pu trương nở Sl668"
                                          loading="lazy"
                                          srcSet=""
                                          data-srcset="https://nhaankhang.com/wp-content/uploads/2019/08/IMG_9415-Edit-221x300.png 221w, https://nhaankhang.com/wp-content/uploads/2019/08/IMG_9415-Edit-768x1044.png 768w, https://nhaankhang.com/wp-content/uploads/2019/08/IMG_9415-Edit-753x1024.png 753w, https://nhaankhang.com/wp-content/uploads/2019/08/IMG_9415-Edit-600x815.png 600w, https://nhaankhang.com/wp-content/uploads/2019/08/IMG_9415-Edit.png 1448w"
                                          sizes="(max-width: 221px) 100vw, 221px"
                                        />{' '}
                                      </div>
                                    </div>
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">
                                          GỢI Ý 5 LOẠI KEO XỬ LÝ RÒ RỈ NƯỚC TỐT NHẤT HIỆN NAY
                                        </h5>
                                        <div className="post-meta is-small op-8">22/10/2019</div>{' '}
                                        <div className="is-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a href="https://nhaankhang.com/may-chong-tham-sl500-10-html/" className="plain">
                                  <div className="box box-normal box-text-bottom box-blog-post has-hover">
                                    <div className="box-image">
                                      <div className="image-cover" style={{ paddingTop: '0%' }}>
                                        <img
                                          width={300}
                                          height={177}
                                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20300%20177%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                          data-src="https://nhaankhang.com/wp-content/uploads/2019/10/sl500-300x177.jpg"
                                          className="lazy-load attachment-medium size-medium wp-post-image"
                                          alt=""
                                          loading="lazy"
                                          srcSet=""
                                          data-srcset="https://nhaankhang.com/wp-content/uploads/2019/10/sl500-300x177.jpg 300w, https://nhaankhang.com/wp-content/uploads/2019/10/sl500.jpg 568w"
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />{' '}
                                      </div>
                                    </div>
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">ĐẠI LÝ MÁY BƠM KEO SL500 (TOÀN QUỐC)</h5>
                                        <div className="post-meta is-small op-8">18/10/2019</div>{' '}
                                        <div className="is-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <p style={{ textAlign: 'right' }}>
                            <a href="https://nhaankhang.com/chuyen-muc/tin-tuc/"> + More News</a>
                          </p>
                        </div>
                      </div>
                      <div id="col-1756564835" className="col medium-7 small-12 large-7">
                        <div className="col-inner">
                          <div className="tieu-de-2">
                            <h2>
                              <span style={{ color: '#000000' }}>Kiến thức</span>
                            </h2>
                          </div>
                          <div className="row large-columns-1 medium-columns-1 small-columns-1 row-small">
                            <div className="col post-item">
                              <div className="col-inner">
                                <a
                                  href="https://nhaankhang.com/keo-xu-ly-nut-be-tong-hieu-qua-nhat-hien-nay/"
                                  className="plain"
                                >
                                  <div className="box box-vertical box-text-middle box-blog-post has-hover">
                                    <div className="box-image" style={{ width: '20%' }}>
                                      <div className="image-overlay-add image-cover" style={{ paddingTop: '95%' }}>
                                        <img
                                          width={500}
                                          height={375}
                                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20500%20375%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                          data-src="https://nhaankhang.com/wp-content/uploads/2019/07/xu-ly-nut-be-tong1.jpg"
                                          className="lazy-load attachment-original size-original wp-post-image"
                                          alt="keo xử lý nứt bê tông"
                                          loading="lazy"
                                          srcSet=""
                                          data-srcset="https://nhaankhang.com/wp-content/uploads/2019/07/xu-ly-nut-be-tong1.jpg 500w, https://nhaankhang.com/wp-content/uploads/2019/07/xu-ly-nut-be-tong1-300x225.jpg 300w"
                                          sizes="(max-width: 500px) 100vw, 500px"
                                        />{' '}
                                        <div
                                          className="overlay"
                                          style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.22)'
                                          }}
                                        />{' '}
                                      </div>
                                    </div>
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">
                                          KEO XỬ LÝ NỨT BÊ TÔNG HIỆU QUẢ NHẤT HIỆN NAY
                                        </h5>
                                        <div className="is-divider" />
                                        <p className="from_the_blog_excerpt ">
                                          Nứt bê tông là một trong những nguyên nhân làm giảm tuổi thọ và thời gian sử
                                          dụng của các công trình xây dựng. Nứt bê tông có [...]{' '}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a
                                  href="https://nhaankhang.com/top-5-loai-may-bom-keo-pu-chong-tham-dang-thinh-hanh/"
                                  className="plain"
                                >
                                  <div className="box box-vertical box-text-middle box-blog-post has-hover">
                                    <div className="box-image" style={{ width: '20%' }}>
                                      <div className="image-overlay-add image-cover" style={{ paddingTop: '95%' }}>
                                        <img
                                          width={239}
                                          height={211}
                                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20239%20211%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                          data-src="https://nhaankhang.com/wp-content/uploads/2019/09/tải-xuống.jpg"
                                          className="lazy-load attachment-original size-original wp-post-image"
                                          alt="Máy bơm keo sl500-nhaankhang.com"
                                          loading="lazy"
                                        />{' '}
                                        <div
                                          className="overlay"
                                          style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.22)'
                                          }}
                                        />{' '}
                                      </div>
                                    </div>
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">
                                          TOP 5 LOẠI MÁY BƠM KEO PU CHỐNG THẤM ĐANG THỊNH HÀNH
                                        </h5>
                                        <div className="is-divider" />
                                        <p className="from_the_blog_excerpt ">
                                          Máy bơm keo Pu chống thấm là một trong những loại máy móc rất cần thiết trong
                                          việc thi công các công trình chống thấm. Nó không chỉ [...]{' '}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a
                                  href="https://nhaankhang.com/huong-dan-thi-cong-chong-tham-be-nuoc/"
                                  className="plain"
                                >
                                  <div className="box box-vertical box-text-middle box-blog-post has-hover">
                                    <div className="box-image" style={{ width: '20%' }}>
                                      <div className="image-overlay-add image-cover" style={{ paddingTop: '95%' }}>
                                        <img
                                          width={600}
                                          height={217}
                                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20600%20217%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                          data-src="https://nhaankhang.com/wp-content/uploads/2019/07/chong-tham-be-nuoc-1-600x217.jpg"
                                          className="lazy-load attachment-original size-original wp-post-image"
                                          alt=""
                                          loading="lazy"
                                          srcSet=""
                                          data-srcset="https://nhaankhang.com/wp-content/uploads/2019/07/chong-tham-be-nuoc-1-600x217.jpg 600w, https://nhaankhang.com/wp-content/uploads/2019/07/chong-tham-be-nuoc-1-600x217-300x109.jpg 300w"
                                          sizes="(max-width: 600px) 100vw, 600px"
                                        />{' '}
                                        <div
                                          className="overlay"
                                          style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.22)'
                                          }}
                                        />{' '}
                                      </div>
                                    </div>
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">
                                          CHỐNG THẤM BỂ NƯỚC- HƯỚNG DẪN THI CÔNG CHI TIẾT
                                        </h5>
                                        <div className="is-divider" />
                                        <p className="from_the_blog_excerpt ">
                                          Biện pháp chống thấm bể nước ngầm, bể nước ăn, bể nước sinh hoạt nào đạt hiệu
                                          quả tốt nhất hiện nay? Nhà An Khang xin giới thiệu [...]{' '}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col post-item">
                              <div className="col-inner">
                                <a href="https://nhaankhang.com/thi-cong-epoxy-san-mai/" className="plain">
                                  <div className="box box-vertical box-text-middle box-blog-post has-hover">
                                    <div className="box-image" style={{ width: '20%' }}>
                                      <div className="image-overlay-add image-cover" style={{ paddingTop: '95%' }}>
                                        <img
                                          width={600}
                                          height={493}
                                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20600%20493%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                          data-src="https://nhaankhang.com/wp-content/uploads/2019/07/thumbnail-ashx-600x493.png"
                                          className="lazy-load attachment-original size-original wp-post-image"
                                          alt=""
                                          loading="lazy"
                                          srcSet=""
                                          data-srcset="https://nhaankhang.com/wp-content/uploads/2019/07/thumbnail-ashx-600x493.png 600w, https://nhaankhang.com/wp-content/uploads/2019/07/thumbnail-ashx-600x493-300x247.png 300w"
                                          sizes="(max-width: 600px) 100vw, 600px"
                                        />{' '}
                                        <div
                                          className="overlay"
                                          style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.22)'
                                          }}
                                        />{' '}
                                      </div>
                                    </div>
                                    <div className="box-text text-left">
                                      <div className="box-text-inner blog-post-inner">
                                        <h5 className="post-title is-large ">
                                          SƠN EPOXY SÀN MÁI – HƯỚNG DẪN THI CÔNG CHUẨN NHẤT NĂM 2019
                                        </h5>
                                        <div className="is-divider" />
                                        <p className="from_the_blog_excerpt ">
                                          Sơn epoxy là loại sơn có thể bám tốt lên hầu hết các bề mặt nên ngoài việc sơn
                                          lên các sàn bê tông, sơn epoxy còn được [...]{' '}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <p style={{ textAlign: 'right' }}>
                            <a href="https://nhaankhang.com/chuyen-muc/kien-thuc-website/"> + More Blogs</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col-1735218718" className="col cot3 hide-for-small medium-3 small-12 large-3">
                  <div className="col-inner">
                    <div className="tinh-nang-vuot-troi">Vì sao chọn chúng tôi</div>
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: 35 }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={100}
                              height={100}
                              src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                              data-src="https://nhaankhang.com/wp-content/uploads/2018/03/web-design-1.png"
                              className="lazy-load attachment-medium size-medium"
                              alt=""
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <p>
                          <span style={{ color: '#008000', fontSize: '120%' }}>Nhập khẩu Đài Loan, Korea</span>
                        </p>
                        <p>
                          <span style={{ fontSize: '95%' }}>
                            Xách tay về từ các thị trường USA, Korea, Malaysia, Đức…
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: 35 }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={100}
                              height={100}
                              src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                              data-src="https://nhaankhang.com/wp-content/uploads/2018/03/Local-seo.png"
                              className="lazy-load attachment-medium size-medium"
                              alt=""
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <p>
                          <span style={{ color: '#ff6600', fontSize: '120%' }}>Cung cấp sỉ lẻ</span>
                        </p>
                        <p>
                          <span style={{ fontSize: '95%' }}>Cung cấp sỉ lẻ với nhiều ưu đãi</span>
                        </p>
                      </div>
                    </div>
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: 35 }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={100}
                              height={100}
                              src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                              data-src="https://nhaankhang.com/wp-content/uploads/2018/03/pair-ads.png"
                              className="lazy-load attachment-medium size-medium"
                              alt=""
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <p>
                          <span style={{ color: '#e14d43', fontSize: '120%' }}>100% chính hãng</span>
                        </p>
                        <p>
                          <span style={{ fontSize: '95%' }}>
                            Không một sản phẩm nào bị buông lỏng khâu quản lý chất lượng..
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: '\n#section_801061950 {\n  padding-top: 46px;\n  padding-bottom: 46px;\n}\n'
              }}
            />
          </section>
        </div>
      </main>
      <div id="main-menu" className="mobile-sidebar no-scrollbar mfp-hide">
        <div className="sidebar-menu no-scrollbar text-center">
          <ul className="nav nav-sidebar nav-vertical nav-uppercase nav-anim">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18">
              <a href="https://nhaankhang.com/" aria-current="page">
                Trang chủ
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2777">
              <a href="https://nhaankhang.com/gioi-thieu/">Giới thiệu</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2771">
              <a href="https://nhaankhang.com/cua-hang/">Sản phẩm</a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3196">
              <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/phu-kien-ho-tro/">Phụ kiện hỗ trợ</a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3194">
              <a href="https://nhaankhang.com/danh-muc/tai-lieu-thi-cong-thi-cong-chong-tham/">Dịch vụ Thi công</a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3294">
              <a href="https://nhaankhang.com/chuyen-muc/tin-tuc/">Tin tức</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27">
              <a href="https://nhaankhang.com/lien-he/">Liên hệ</a>
            </li>
            <li className="hotline-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-1658">
              <a href="tel:+84908485861">Hotline: 090 84 85 861</a>
            </li>
          </ul>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n            * input, textarea {\n\n                -webkit-touch-callout: none;\n                -webkit-user-select: none;\n                -khtml-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n        '
        }}
      />
      <div className="tool-icon">
        <a href="tel:0908485861" className="phone-icon">
          <span className="suntory-alo-ph-circle-fill" />
          <span className="suntory-alo-ph-img-circle">
            <i className="fa fa-phone" />
          </span>
        </a>
        <a href="https://zalo.me/0908485861" className="mess-icon" target="_blank">
          <span className="suntory-alo-ph-circle-fill" />
          <span className="suntory-alo-ph-img-circle">
            <i />
          </span>
        </a>
      </div>{' '}
      <div id="login-form-popup" className="lightbox-content mfp-hide">
        <div className="woocommerce-notices-wrapper" />
        <div className="account-container lightbox-inner">
          <div className="account-login-inner">
            <h3 className="uppercase">Đăng nhập</h3>
            <form className="woocommerce-form woocommerce-form-login login" method="post">
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="username">
                  Tên tài khoản hoặc địa chỉ email&nbsp;
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  defaultValue=""
                />{' '}
              </p>
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="password">
                  Mật khẩu&nbsp;<span className="required">*</span>
                </label>
                <input
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
              </p>
              <p className="form-row">
                <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                  <input
                    className="woocommerce-form__input woocommerce-form__input-checkbox"
                    name="rememberme"
                    type="checkbox"
                    id="rememberme"
                    defaultValue="forever"
                  />{' '}
                  <span>Ghi nhớ mật khẩu</span>
                </label>
                <input
                  type="hidden"
                  id="woocommerce-login-nonce"
                  name="woocommerce-login-nonce"
                  defaultValue="9da3f12e32"
                />
                <input type="hidden" name="_wp_http_referer" defaultValue="/" />{' '}
                <button
                  type="submit"
                  className="woocommerce-button button woocommerce-form-login__submit"
                  name="login"
                  value="Đăng nhập"
                >
                  Đăng nhập
                </button>
              </p>
              <p className="woocommerce-LostPassword lost_password">
                <a href="https://nhaankhang.com/tai-khoan/lost-password/">Quên mật khẩu?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
