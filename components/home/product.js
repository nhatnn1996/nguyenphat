import Link from 'next/link';

export const ProductCom = ({ data }) => {
  return (
    <section className="section danh-muc">
      <div className="bg section-bg fill bg-fill  bg-loaded">
        <div className="section-bg-overlay absolute fill" />
        <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
      </div>
      <div className="section-content relative">
        <div className="row" id="row-1166462991">
          <div id="col-1622567022" className="col small-12 large-12">
            <div className="col-inner">
              <h2 style={{ textAlign: 'center' }}>SẢN PHẨM CHỐNG THẤM</h2>
              <div className="row large-columns-5 medium-columns-3 small-columns-2 row-small">
                {data.map((element) => {
                  const { image, slug, title } = element;
                  return (
                    <div className="col" key={slug}>
                      <div className="col-inner">
                        <div className="badge-container absolute left top z-1"></div>
                        <div className="product-small box has-hover box-normal box-text-bottom">
                          <div className="box-image">
                            <div className="image-zoom image-cover" style={{ paddingTop: '86%' }}>
                              <a href="https://nhaankhang.com/san-pham/chong-tham-pha-xi-mang-ak-seal/">
                                <img
                                  width={433}
                                  height={577}
                                  src={image?.sourceUrl}
                                  srcSet={image?.srcSet}
                                  className="lazy-load attachment-original size-original"
                                  alt={title}
                                  loading="lazy"
                                  sizes={image?.sizes}
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
    </section>
  );
};
