import Link from 'next/link';

export const ProductCom = ({ data }) => {
  return (
    <section className="section danh-muc" id="section_1912716512">
      <div className="bg section-bg fill bg-fill  bg-loaded">
        <div className="section-bg-overlay absolute fill" />
        <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
      </div>
      <div className="section-content relative">
        <div className="row" id="row-1166462991">
          <div id="col-1622567022" className="col small-12 large-12">
            <div className="col-inner">
              <h2 style={{ textAlign: 'center' }}>SẢN PHẨM CHỐNG THẤM</h2>
              <div id="gap-490136710" className="gap-element clearfix" style={{ display: 'block', height: 'auto' }}>
                <style
                  dangerouslySetInnerHTML={{
                    __html: '\n#gap-490136710 {\n  padding-top: 10px;\n}\n'
                  }}
                />
              </div>
              <div className="row large-columns-5 medium-columns-3 small-columns-2 row-small">
                {data.map((element) => {
                  return (
                    <div className="col" key={element.slug}>
                      <div className="col-inner">
                        <div className="badge-container absolute left top z-1"></div>
                        <div className="product-small box has-hover box-normal box-text-bottom">
                          <div className="box-image">
                            <div className="image-zoom image-cover" style={{ paddingTop: '86%' }}>
                              <a href="https://nhaankhang.com/san-pham/chong-tham-pha-xi-mang-ak-seal/">
                                <img
                                  width={433}
                                  height={577}
                                  src={element.image}
                                  data-src={element.image}
                                  className="lazy-load attachment-original size-original"
                                  alt=""
                                  loading="lazy"
                                  srcSet=""
                                  // data-srcset="https://nhaankhang.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview.png 433w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-225x300.png 225w"
                                  sizes="(max-width: 433px) 100vw, 433px"
                                />{' '}
                              </a>
                            </div>
                            <div className="image-tools top right show-on-hover"></div>
                            <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                          </div>
                          <div className="box-text text-center">
                            <div className="title-wrapper">
                              <p className="name product-title woocommerce-loop-product__title">
                                <Link href={'/san-pham/' + element.slug}>{element.name}</Link>
                              </p>
                            </div>
                            <div className="price-wrapper">
                              <span className="price">
                                <span className="amount">Giá: Liên hệ</span>
                              </span>
                            </div>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n#section_1912716512 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n#section_1912716512 .section-bg-overlay {\n  background-color: rgb(255, 255, 255);\n}\n'
        }}
      />
    </section>
  );
};
