import React, { useEffect } from 'react';
import { Service, ProductCom, ProductsCom, Video, Slider, NewsCom } from '@/components/home/index';
import { apollo } from '@/api/index';
import { homeGQL } from '@/geters/home';
import { Testimomial } from '@/components/home/testimonial';
import {timeCache} from "@/service/helper"

export async function getStaticProps() {
  const result = await apollo.query({ query: homeGQL });
  const home = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    home[key] = element?.nodes || element?.posts || [];
  });

  const { menuItems, posts, products, category } = home;

  const news = category.nodes || [];
  const waterproofing = []; // không thấm nước
  const accessories = []; // phụ kiện
  // split the products list into waterproofing group and accessories group
  products &&
    products.forEach((element) => {
      const listCategory = element.productCategories?.edges || [];
      const item = listCategory.find((element) => element.node.slug === 'san-pham-chong-tham');
      if (item) {
        if (waterproofing.length < 10) waterproofing.push(element);
      } else {
        if (accessories.length < 10) accessories.push(element);
      }
    });
  return { props: { menuItems, posts, waterproofing, accessories, news }, revalidate: timeCache };
}

export default function Home(props) {
  const { posts, waterproofing, accessories, news } = props;
  var infoSetting = {};
  if (typeof window !== 'undefined') {
    infoSetting = JSON.parse(window.localStorage.getItem('info'));
  }
  return (
    <>
      <main id="main" className="">
        <div id="content" role="main" className="content-area">
          <Slider />
          <section className="section dich-vu-san-pham">
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
                              src="/icons/Local-seo.png"
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
                              src="/icons/map.png"
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
                              src="/icons/pair-ads.png"
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
                              src="/icons/shield.png"
                              className="attachment-medium size-medium lazy-load-active"
                              alt=""
                              loading="lazy"
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

          <section className="section cam-ket">
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
                    <div className="row justify-center" id="row-821149920">
                      <div id="col-633674386" className="col medium-4 small-12 large-4">
                        <div className="col-inner">
                          <a
                            href="tel:+02837273679"
                            target="_self"
                            className="button alert is-large lowercase expand"
                            style={{ borderRadius: 99 }}
                          >
                            <i className="icon-phone" /> <span>Hotline: {infoSetting.hotline} </span>
                          </a>
                        </div>
                      </div>
                      <div id="col-1171345885" className="col medium-4 small-12 large-4">
                        <div className="col-inner">
                          <a
                            href="https://m.me/chongthamnguyenphat"
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
          </section>
          <Testimomial />
          <NewsCom data={news} />
        </div>
      </main>
      <div className="tool-icon">
        <a href="tel:+02837273679" className="phone-icon">
          <span className="suntory-alo-ph-circle-fill" />
          <span className="suntory-alo-ph-img-circle">
            <i className="fa fa-phone" />
          </span>
        </a>
        <a href="https://zalo.me/02837273679" className="mess-icon" target="_blank">
          <span className="suntory-alo-ph-circle-fill" />
          <span className="suntory-alo-ph-img-circle">
            <img src="/icons/zalo.png" alt="" className="icon-center" />
          </span>
        </a>
      </div>{' '}
    </>
  );
}
