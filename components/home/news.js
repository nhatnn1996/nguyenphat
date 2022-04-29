export const NewsCom = ({ data = [] }) => {
  console.log(data);
  return (
    <section className="section tin-tuc" id="section_801061950">
      <div className="bg section-bg fill bg-fill  bg-loaded">
        <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
      </div>
      <div className="section-content relative">
        <div className="row" id="row-22093099">
          <div id="col-581890183" className="col cot10 medium-9 small-12 large-9">
            <div className="col-inner">
              <div className="row row1-cot1" id="row-436134977">
                <div id="col-1756564835" className="col medium-7 small-12 large-12">
                  <div className="col-inner">
                    <div className="tieu-de-2">
                      <h2>
                        <span style={{ color: '#000000' }}>Kiến thức</span>
                      </h2>
                    </div>
                    <div className=" wrap-items-news large-columns-1 medium-columns-1 small-columns-1 row-small">
                      {data.map((element) => (
                        <PostItem data={element} key={element.slug} />
                      ))}
                    </div>
                    <p style={{ textAlign: 'center' }}>
                      <a href="https://nhaankhang.com/chuyen-muc/kien-thuc-website/"> + Xem thêm</a>
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
                    <span style={{ fontSize: '95%' }}>Xách tay về từ các thị trường USA, Korea, Malaysia, Đức…</span>
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
  );
};

const PostItem = ({ data }) => {
  const { slug, excerpt, title, featuredImage } = data;
  const image = featuredImage?.node || {};
  return (
    <div className="items-news">
      <div className="col post-item">
        <div className="col-inner">
          <a href="" className="plain">
            <div className="box box-vertical box-text-middle box-blog-post has-hover">
              <div className="box-image" style={{ width: '20%' }}>
                <div className="image-overlay-add image-cover" style={{ paddingTop: '95%' }}>
                  <img
                    width={600}
                    height={493}
                    src={image.sourceUrl}
                    data-src={image.sourceUrl}
                    className="lazy-load attachment-original size-original wp-post-image"
                    alt={image.title}
                    loading="lazy"
                    srcSet={image.srcSet}
                    data-srcset={image.srcSet}
                    sizes={image.size}
                  />
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
                  <h5 className="post-title is-large ">{title}</h5>
                  <div className="is-divider" />
                  <div className="from_the_blog_excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};