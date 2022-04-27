import Link from 'next/link';

export const Service = ({ data }) => {
  // console.log(data);
  return (
    <section className="section danh-muc" id="section_92421960">
      <div className="bg section-bg fill bg-fill  bg-loaded">
        <div className="section-bg-overlay absolute fill" />
        <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
      </div>
      <div className="section-content relative">
        <div className="row" id="row-1330272118">
          <div id="col-1154093278" className="col small-12 large-12">
            <div className="col-inner">
              <h2
                style={{
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                Dịch vụ thi công
              </h2>
              <div id="gap-1869410865" className="gap-element clearfix" style={{ display: 'block', height: 'auto' }}>
                <style
                  dangerouslySetInnerHTML={{
                    __html: '\n#gap-1869410865 {\n  padding-top: 10px;\n}\n'
                  }}
                />
              </div>
              <div className="row large-columns-5 medium-columns-3 small-columns-2 row-small">
                {data.map((element) => {
                  const { featuredImage, slug, title } = element;
                  const image = featuredImage.node || {};
                  return (
                    <div className="col" key={element.slug}>
                      <div className="col-inner">
                        <div className="badge-container absolute left top z-1"></div>
                        <div className="product-small box has-hover box-normal box-text-bottom">
                          <div className="box-image">
                            <div className="image-zoom image-cover" style={{ paddingTop: '86%' }}>
                              <Link href={'/dich-vu/' + slug}>
                                <img
                                  width={1000}
                                  height={750}
                                  src={image.sourceUrl}
                                  dataSrc={image.sourceUrl}
                                  className="lazy-load attachment-original size-original"
                                  alt={title}
                                  loading="lazy"
                                  srcSet={image.srcSet}
                                  data-srcset={image.srcSet}
                                  sizes="(max-width: 1000px) 100vw, 1000px"
                                />
                              </Link>
                            </div>
                            <div className="image-tools top right show-on-hover"></div>
                            <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                          </div>
                          <div className="box-text text-center">
                            <div className="title-wrapper">
                              <p className="name product-title woocommerce-loop-product__title">
                                <Link href={'/dich-vu/' + slug}>{title}</Link>
                              </p>
                            </div>
                            <div className="price-wrapper">
                              <span className="price">
                                <span className="amount">Giá: Liên hệ</span>
                              </span>
                            </div>
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
            '\n#section_92421960 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n#section_92421960 .section-bg-overlay {\n  background-color: rgb(255, 255, 255);\n}\n'
        }}
      />
    </section>
  );
};
