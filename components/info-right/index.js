import React from 'react';
import Link from 'next/link';
const InfoRight = ({ newProds, newNewsData }) => {
  return (
    <div className="post-sidebar large-3 col">
      <div id="secondary" className="widget-area " role="complementary">
        <aside id="text-2" className="widget widget_text">
          {' '}
          <div className="textwidget">
            <div className="row row-small section-body" id="row-1864619469">
              <div id="col-1901087800" className="col cot4 small-12 large-12">
                <div className="col-inner">
                  <div className="form-lien-he">
                    <div className="tieu-de-form">LIÊN HỆ TƯ VẤN</div>
                    <div role="form" className="wpcf7" id="wpcf7-f2153-o1" lang="vi" dir="ltr">
                      <div className="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                        <ul />
                      </div>
                      <form
                        action="/mau-biet-thu-dep/#wpcf7-f2153-o1"
                        method="post"
                        className="wpcf7-form init"
                        noValidate="novalidate"
                        data-status="init"
                      >
                        <div style={{ display: 'none' }}>
                          <input type="hidden" name="_wpcf7" defaultValue={2153} />
                          <br />
                          <input type="hidden" name="_wpcf7_version" defaultValue="5.3.2" />
                          <br />
                          <input type="hidden" name="_wpcf7_locale" defaultValue="vi" />
                          <br />
                          <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f2153-o1" />
                          <br />
                          <input type="hidden" name="_wpcf7_container_post" defaultValue={0} />
                          <br />
                          <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue />
                        </div>
                        <p>
                          <span className="wpcf7-form-control-wrap text-803">
                            <input
                              type="text"
                              name="text-803"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Họ tên của bạn..."
                            />
                          </span>
                          <br />
                          <span className="wpcf7-form-control-wrap tel-385">
                            <input
                              type="tel"
                              name="tel-385"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Số điện thoại của bạn..."
                            />
                          </span>
                          <br />
                          <span className="wpcf7-form-control-wrap email-824">
                            <input
                              type="email"
                              name="email-824"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Email của bạn..."
                            />
                          </span>
                          <br />
                          <span className="wpcf7-form-control-wrap text-486">
                            <input
                              type="text"
                              name="text-486"
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              aria-invalid="false"
                              placeholder="Bạn cần tư vấn dịch vụ gì?"
                            />
                          </span>
                          <br />
                          <span className="wpcf7-form-control-wrap textarea-177">
                            <textarea
                              name="textarea-177"
                              cols={40}
                              rows={10}
                              className="wpcf7-form-control wpcf7-textarea"
                              aria-invalid="false"
                              placeholder="Thông tin thêm..."
                            />
                          </span>
                          <br />
                          <input type="submit" defaultValue="Gửi liên hệ" className="wpcf7-form-control wpcf7-submit" />
                          <span className="ajax-loader" />
                        </p>
                        <div className="wpcf7-response-output" aria-hidden="true" />
                      </form>
                    </div>
                  </div>
                  <div className="tieu-de">Tiêu điểm</div>
                  <div className="row aaa large-columns-1 medium-columns-1 small-columns-1 row-collapse row-full-width has-shadow row-box-shadow-1">
                    {newNewsData.map((item) => (
                      <div
                        className="col post-item"
                        style={{
                          margin: '10px 0px',
                          boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                        }}
                      >
                        <div className="col-innere">
                          <Link href={`/tin-tuc/${item.slug}`} className="plain">
                            <div className="box box-vertical box-text-middle box-blog-post has-hover">
                              <div className="box-image" style={{ width: '30%' }}>
                                <div className="image-cover">
                                  <img
                                    width={221}
                                    height={300}
                                    src={item.featuredImage.node.sourceUrl}
                                    className="attachment-medium size-medium wp-post-image lazy-load-active"
                                    alt={item.featuredImage.node.title}
                                    loading="lazy"
                                    srcSet={item.featuredImage.node.srcSet}
                                    sizes="(max-width: 221px) 100vw, 221px"
                                  />{' '}
                                </div>
                              </div>
                              <div className="box-text text-left is-small">
                                <div className="box-text-inner blog-post-inner">
                                  <h5 className="post-title is-large ">{item.title}</h5>
                                  <div className="is-divider" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <p />
                      </div>
                    ))}
                  </div>
                  <div className="portfolio-sidebar">
                    <div className="tieu-de">Sản phẩm mới nhất</div>
                    <ul className="product_list_widget">
                      {newProds.map((item) => (
                        <Link href={`/san-pham/${item.node.slug}`} title="Chống thấm pha xi măng AK-Seal">
                          <li
                            style={{
                              margin: '10px 0px',
                              boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                            }}
                          >
                            <img
                              width={100}
                              height={100}
                              src={item.node.image.sourceUrl}
                              className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                              alt={item.node.image.title}
                              loading="lazy"
                              srcSet={item.node.image.srcSet}
                              sizes="(max-width: 100px) 100vw, 100px"
                            />

                            <span className="product-title">{item.node.name}</span>
                            <br />
                            <span className="amount">Giá: Liên hệ</span>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default InfoRight;
