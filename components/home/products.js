import Link from 'next/link';

export const ProductsCom = ({ data }) => {
  return (
    <section className="section danh-muc">
      <div className="bg section-bg fill bg-fill  ">
        <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
      </div>
      <div className="section-content relative">
        <div className="row cao-cap" id="row-517114613">
          <div id="col-1156511335" className="col small-12 large-12">
            <div className="col-inner">
              <h2 style={{ textAlign: 'center' }}>MÁY MÓC VÀ PHỤ KIỆN HỖ TRỢ</h2>
              <div id="gap-1868577936" className="gap-element clearfix" style={{ display: 'block', height: 'auto' }}>
                <style
                  dangerouslySetInnerHTML={{
                    __html: '\n#gap-1868577936 {\n  padding-top: 10px;\n}\n'
                  }}
                />
              </div>
              <div className="row large-columns-5 medium-columns-3 small-columns-2 row-small">
                {data.map((element) => {
                  const { image, slug, title } = element;
                  return (
                    <div className="col" key={slug}>
                      <div className="col-inner">
                        <div className="badge-container absolute left top z-1"></div>
                        <div className="product-small box has-hover box-normal box-text-bottom" style={{height: "300px"}}>
                          <div className="box-image">
                            <div className="image-zoom image-cover" style={{ paddingTop: '86%' }}>
                            <Link href={'/san-pham/' + element.slug}>
                                <img
                                  width={433}
                                  height={577}
                                  src={image?.sourceUrl}
                                  srcSet={image?.srcSet}
                                  className="lazy-load attachment-original size-original"
                                  alt={title}
                                  loading="lazy"
                                  sizes={image?.sizes}
                                />
                              </Link>
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
            '\n#section_1669588426 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  background-color: rgb(241, 221, 221);\n}\n#section_1669588426 .section-bg.bg-loaded {\n  background-image: url(https://nhaankhang.com/wp-content/uploads/2018/03/bg-news1.jpg);\n}\n'
        }}
      />
    </section>
  );
};
