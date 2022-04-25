import Link from 'next/link';

export const ProductsCom = ({ data }) => {
  return (
    <>
      <div className="container section-title-container">
        <h3 className="section-title section-title-center">
          <b />
          <span className="section-title-main" style={{ fontSize: '144%', color: 'rgb(238, 28, 28)' }}>
            VIDEO HƯỚNG DẪN SẢN PHẨM
          </span>
          <b />
        </h3>
      </div>
      <section className="section" id="section_1979183240">
        <div className="bg section-bg fill bg-fill  bg-loaded"></div>
        <div className="section-content relative">
          <div className="row" style={{ maxWidth: '' }} id="row-1832827634">
            <div id="col-517339945" className="col medium-6 small-12 large-6">
              <div className="col-inner">
                <div className="video video-fit mb" style={{ paddingTop: '56.25%' }}>
                  <p>
                    <iframe
                      loading="lazy"
                      title="Thi công dán màn khò chống thấm"
                      width={1020}
                      height={765}
                      src="https://www.youtube.com/embed/--j5QOtG0M0?feature=oembed"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                  </p>
                </div>
              </div>
            </div>
            <div id="col-105447740" className="col medium-6 small-12 large-6">
              <div className="col-inner text-center">
                <div className="video video-fit mb box-shadow-3 box-shadow-4-hover" style={{ paddingTop: '56.25%' }}>
                  <p>
                    <iframe
                      loading="lazy"
                      title="Chống nứt bằng máy bơm keo Epoxy, PU sl500 lh 090 84 85 86 1"
                      width={1020}
                      height={765}
                      src="https://www.youtube.com/embed/Z7IC-F-kCA4?feature=oembed"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: '\n#section_1979183240 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n'
          }}
        />
      </section>
    </>
  );
};
