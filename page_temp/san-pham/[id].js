import { apollo } from '@/api/index';
import React, { useEffect } from 'react';
import { productDetailGQL, productGQL, productByCategoryGQL } from '@/geters/product';
import {timeCache} from "@/service/helper"


export async function getStaticProps({ params }) {
  const result = await apollo.query({ query: productDetailGQL, variables: { _id: params.id } });
  const { product } = result?.data;
  const productCategory = await apollo.query({
    query: productByCategoryGQL,
    variables: { _id: product.productCategories.edges[0]?.node.id }
  });
  const { products } = productCategory.data.productCategory;
  return { props: { product, products }, revalidate: timeCache };
}
export async function getStaticPaths() {
  const { data } = await apollo.query({ query: productGQL });
  const paths = data?.products?.nodes?.map((element) => ({
    params: { ...element, id: element.id }
  }));
  return {
    paths: paths,
    fallback: true
  };
}
const ProductDetail = ({ product }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sortDescription = document.getElementById('product-short-description');
      const decription = document.getElementById('accordion-inner');
      if (sortDescription && decription) {
        sortDescription.innerHTML = product.shortDescription;
        decription.innerHTML = product.description;
      }
    }
  }, []);

  return (
    <div className="shop-container">
      <div className="container">
        <div className="woocommerce-notices-wrapper" />
      </div>
      <div
        id="product-3697"
        className="product type-product post-3697 status-publish first instock product_cat-xu-ly-ro-ri-nuoc product_cat-sp-chong-tham-test product_tag-chong-tham-san-mai product_tag-chong-tham-san-thuong product_tag-keo-chong-tham-lo-thien product_tag-pu-goc-nuoc product_tag-pu-he-nuoc has-post-thumbnail shipping-taxable product-type-simple"
      >
        <div className="custom-product-page">
          <section className="section chi-tiet-sp" id="section_1929741669">
            <div className="bg section-bg fill bg-fill bg-loaded"></div>
            <div className="section-content relative">
              <div className="row row1" id="row-1561942">
                <div id="col-139192948" className="col medium-6 small-12 large-6">
                  <div className="col-inner" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                    <div className="product-title-container is-small">
                      <h1 className="product-title product_title entry-title">{product.name}</h1>
                    </div>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: '\n#col-139192948 > .col-inner {\n  padding: 10px 10px 0px 10px;\n}\n'
                    }}
                  />
                </div>
                <div id="col-170417640" className="col medium-3 small-12 large-3">
                  <div className="col-inner text-right" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                    <div
                      id="gap-981222257"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style dangerouslySetInnerHTML={{ __html: '\n#gap-981222257 {\n  padding-top: 6px;\n}\n' }} />
                    </div>
                    <div className="product-breadcrumb-container is-smaller">
                      <nav className="woocommerce-breadcrumb breadcrumbs uppercase">
                        <a href="https://chongthamnguyenphat.com">Sản phẩm</a> <span className="divider">/</span>{' '}
                        <a href="https://chongthamnguyenphat.com/danh-muc/sp-chong-tham-test/">{product.name}</a>
                      </nav>
                    </div>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: '\n#col-170417640 > .col-inner {\n  padding: 10px 0px 0px 10px;\n}\n'
                    }}
                  />
                </div>
                <div id="col-1011885272" className="col cot3 medium-3 small-12 large-3">
                  <div className="col-inner">
                    <a
                      rel="noopener noreferrer"
                      href="tel:+84908485861"
                      target="_blank"
                      className="button primary lowercase expand"
                    >
                      <i className="icon-phone" /> <span>Hotline:  0918 220 639</span>
                    </a>
                  </div>
                </div>
                <div id="col-1258600591" className="col anh-san-pham medium-4 small-12 large-4">
                  <div className="col-inner">
                    <p></p>
                    <div
                      className="product-images slider-wrapper relative mb-half has-hover woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images "
                      data-columns={4}
                      style={{ opacity: 1 }}
                    >
                      <div className="absolute left right">
                        <div className="container relative">
                          <div className="badge-container is-larger absolute left top z-1"></div>{' '}
                        </div>
                      </div>
                      <figure
                        className="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-circle mb-half slider-style-container slider-nav-light slider-load-first no-overflow is-draggable flickity-enabled slider-lazy-load-active"
                        data-flickity-options='{
				"cellAlign": "center",
				"wrapAround": true,
				"autoPlay": false,
				"prevNextButtons":true,
				"adaptiveHeight": true,
				"imagesLoaded": true,
				"lazyLoad": 1,
				"dragThreshold" : 15,
				"pageDots": false,
				"rightToLeft": false			}'
                        style={{ backgroundColor: '#333' }}
                        tabIndex={0}
                      >
                        <div className="flickity-viewport" style={{ height: '524.133px', touchAction: 'pan-y' }}>
                          <div
                            className="flickity-slider"
                            style={{ left: '0px', transform: 'translateX(0%)', display: 'flex', alignItems: 'center' }}
                          >
                            <div
                              data-thumb="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                              className="woocommerce-product-gallery__image slide first is-selected"
                              aria-selected="true"
                              style={{ position: 'absolute', left: '0%' }}
                            >
                              <a href="#">
                                <img
                                  width={433}
                                  height={577}
                                  src={product.image.sourceUrl}
                                  className="lazy-load skip-lazy"
                                  alt={product.image.title}
                                  loading="lazy"
                                  title="z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview"
                                  data-caption={product.image.title}
                                  data-large_image_width={433}
                                  data-large_image_height={577}
                                  srcSet={product.image.srcSet}
                                  sizes={product.image.sizes}
                                />{' '}
                              </a>
                            </div>
                            <div
                              data-thumb="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                              className="woocommerce-product-gallery__image slide"
                              aria-selected="false"
                              style={{ position: 'absolute', left: '100%' }}
                            >
                              <a href="#">
                                <img
                                  width={433}
                                  height={577}
                                  src={product.image.sourceUrl}
                                  className="lazy-load skip-lazy"
                                  alt={product.image.title}
                                  loading="lazy"
                                  title="z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview"
                                  data-caption={product.image.title}
                                  data-large_image_width={433}
                                  data-large_image_height={577}
                                  srcSet={product.image.srcSet}
                                  sizes={product.image.sizes}
                                />
                              </a>
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
                      </figure>
                      <div className="loading-spin centered dark" style={{ display: 'none' }} />
                      <div className="absolute bottom left right">
                        <div className="container relative image-tools">
                          <div className="image-tools absolute bottom right z-3">
                            <a
                              href="#product-zoom"
                              className="zoom-button button is-outline circle icon tooltip hide-for-small tooltipstered"
                            >
                              <i className="icon-expand" />{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p />
                  </div>
                </div>
                <div id="col-160653139" className="col thong-tin-co-ban medium-5 small-12 large-5">
                  <div className="col-inner">
                    <div
                      id="gap-516168239"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style dangerouslySetInnerHTML={{ __html: '\n#gap-516168239 {\n  padding-top: 14px;\n}\n' }} />
                    </div>
                    <div className="product-short-description" id="product-short-description">
                      <div style={{ width: '480px' }} className="wp-video">
                        <div
                          id="mep_0"
                          className="mejs-container mejs-container-keyboard-inactive wp-video-shortcode mejs-video"
                          tabIndex={0}
                          role="application"
                          aria-label="Trình chơi Video"
                          style={{ width: '480px', height: '854px', minWidth: '217px' }}
                        >
                          <div className="mejs-inner">
                            <div className="mejs-mediaelement">
                              <mediaelementwrapper id="video-3697-1">
                                <video
                                  controls
                                  className="wp-video-shortcode"
                                  id="video-3697-1_html5"
                                  width={480}
                                  height={854}
                                  preload="metadata"
                                  src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/8238670221663919663.mp4?_=1"
                                  style={{ width: '480px', height: '854px' }}
                                >
                                  <source type="video/mp4" src={product.shortDescription.replace()} />
                                  <a href="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/8238670221663919663.mp4">
                                    https://chongthamnguyenphat.com/wp-content/uploads/2022/03/8238670221663919663.mp4
                                  </a>
                                </video>
                              </mediaelementwrapper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-price-container is-larger">
                      <div className="price-wrapper">
                        <p className="price product-page-price ">
                          <span className="rrp-price">Giá cũ: </span>
                          <span className="amount">Giá: Liên hệ</span>
                        </p>
                      </div>
                    </div>
                    <div className="add-to-cart-container form-normal is-normal" />
                  </div>
                </div>
                <div id="col-1854681923" className="col medium-3 small-12 large-3">
                  <div className="col-inner">
                    <h3>Địa điểm mua hàng:</h3>
                    <div className="icon-box featured-box icon-box-left text-left">
                      <div className="icon-box-img" style={{ width: '31px' }}>
                        <div className="icon">
                          <div className="icon-inner">
                            <img
                              width={100}
                              height={100}
                              src="https://chongthamnguyenphat.com/wp-content/uploads/2018/03/map.png"
                              className="attachment-medium size-medium"
                              alt=""
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="icon-box-text last-reset">
                        <p>
                          <span style={{ fontSize: '105%', color: '#000000' }}>
                            Địa chỉ mua hàng
                            <br />
                          </span>
                          <span style={{ fontSize: '85%' }}>224/11/7 Phạm Văn chí ,Phường 04,Quận 06 TP HCM</span>
                        </p>
                      </div>
                    </div>
                    <div
                      id="gap-485607457"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style dangerouslySetInnerHTML={{ __html: '\n#gap-485607457 {\n  padding-top: 12px;\n}\n' }} />
                    </div>
                    <p>
                      <span style={{ fontSize: '100%' }}>
                        Giao hàng và lắp đặt miễn phí ở Hà Nội, TP HCM và Hải Phòng
                      </span>
                    </p>
                    <a
                      rel="noopener noreferrer"
                      href="https://messenger.com/t/254300248069701/"
                      target="_blank"
                      className="button success lowercase expand"
                      style={{ borderRadius: '4px' }}
                    >
                      <i className="icon-facebook" /> <span>Chat Facebook</span>
                    </a>
                    <div
                      id="gap-1610357282"
                      className="gap-element clearfix"
                      style={{ display: 'block', height: 'auto' }}
                    >
                      <style dangerouslySetInnerHTML={{ __html: '\n#gap-1610357282 {\n  padding-top: 15px;\n}\n' }} />
                    </div>
                    <div className="social-icons follow-icons full-width text-center">
                      <a
                        href="#"
                        target="_blank"
                        data-label="Facebook"
                        rel="noopener noreferrer nofollow"
                        className="icon primary button circle facebook tooltip tooltipstered"
                      >
                        <i className="icon-facebook" />
                      </a>
                      <a
                        href="mailto:#"
                        data-label="E-mail"
                        rel="nofollow"
                        className="icon primary button circle email tooltip tooltipstered"
                      >
                        <i className="icon-envelop" />
                      </a>
                      <a
                        href="tel:#"
                        target="_blank"
                        data-label="Phone"
                        rel="noopener noreferrer nofollow"
                        className="icon primary button circle phone tooltip tooltipstered"
                      >
                        <i className="icon-phone" />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        data-label="YouTube"
                        className="icon primary button circle youtube tooltip tooltipstered"
                      >
                        <i className="icon-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n#row-1561942 > .col > .col-inner {\n  padding: 10px 0px 10px 0px;\n  background-color: rgb(255, 255, 255);\n}\n'
                  }}
                />
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n#section_1929741669 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n#section_1929741669 .section-bg.bg-loaded {\n  background-image: url(https://chongthamnguyenphat.com/wp-content/uploads/2018/03/bg-portfolio.jpg);\n}\n'
              }}
            />
          </section>
          <div className="row row-small row2" id="row-191126424">
            <div id="col-1754419614" className="col medium-8 small-12 large-8">
              <div className="col-inner">
                <div className="product-page-accordian">
                  <div className="accordion" rel={1}>
                    <div className="accordion-item">
                      <a className="accordion-title plain active" href="javascript:void();" aria-expanded="false">
                        <button className="toggle">
                          <i className="icon-angle-down" />
                        </button>
                        Mô tả{' '}
                      </a>
                      <div className="accordion-inner" id="accordion-inner" style={{ display: 'block' }}></div>
                    </div>
                    <div className="accordion-item">
                      <a className="accordion-title plain" href="javascript:void();" aria-expanded="false">
                        <button className="toggle">
                          <i className="icon-angle-down" />
                        </button>
                        Đánh giá (0){' '}
                      </a>
                      <div className="accordion-inner" style={{ display: 'none' }}>
                        <div id="reviews" className="woocommerce-Reviews row">
                          <div id="comments" className="col large-12">
                            <h3 className="woocommerce-Reviews-title normal">Đánh giá </h3>
                            <p className="woocommerce-noreviews">Chưa có đánh giá nào.</p>
                          </div>
                          <div id="review_form_wrapper" className="large-12 col">
                            <div id="review_form" className="col-inner">
                              <div className="review-form-inner has-border">
                                <div id="respond" className="comment-respond">
                                  <h3 id="reply-title" className="comment-reply-title">
                                    Hãy là người đầu tiên nhận xét “AK- PU1000 (Chống thấm Polyurethane Gốc Nước)”{' '}
                                    <small>
                                      <a
                                        rel="nofollow"
                                        id="cancel-comment-reply-link"
                                        href="/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/#respond"
                                        style={{ display: 'none' }}
                                      >
                                        Hủy
                                      </a>
                                    </small>
                                  </h3>
                                  <form
                                    action="https://chongthamnguyenphat.com/wp-comments-post.php"
                                    method="post"
                                    id="commentform"
                                    className="comment-form"
                                    noValidate
                                  >
                                    <div className="comment-form-rating">
                                      <label htmlFor="rating">
                                        Đánh giá của bạn&nbsp;<span className="required">*</span>
                                      </label>
                                      <p className="stars">
                                        {' '}
                                        <span>
                                          {' '}
                                          <a className="star-1" href="#">
                                            1
                                          </a>{' '}
                                          <a className="star-2" href="#">
                                            2
                                          </a>{' '}
                                          <a className="star-3" href="#">
                                            3
                                          </a>{' '}
                                          <a className="star-4" href="#">
                                            4
                                          </a>{' '}
                                          <a className="star-5" href="#">
                                            5
                                          </a>{' '}
                                        </span>{' '}
                                      </p>
                                      <select name="rating" id="rating" required style={{ display: 'none' }}>
                                        <option value>Xếp hạng…</option>
                                        <option value={5}>Rất tốt</option>
                                        <option value={4}>Tốt</option>
                                        <option value={3}>Trung bình</option>
                                        <option value={2}>Không tệ</option>
                                        <option value={1}>Rất tệ</option>
                                      </select>
                                    </div>
                                    <p className="comment-form-comment">
                                      <label htmlFor="comment">
                                        Nhận xét của bạn&nbsp;<span className="required">*</span>
                                      </label>
                                      <textarea
                                        id="comment"
                                        name="comment"
                                        cols={45}
                                        rows={8}
                                        required
                                        defaultValue={''}
                                      />
                                    </p>
                                    <p className="comment-form-author">
                                      <label htmlFor="author">
                                        Tên&nbsp;<span className="required">*</span>
                                      </label>
                                      <input id="author" name="author" type="text" defaultValue size={30} required />
                                    </p>
                                    <p className="comment-form-email">
                                      <label htmlFor="email">
                                        Email&nbsp;<span className="required">*</span>
                                      </label>
                                      <input id="email" name="email" type="email" defaultValue size={30} required />
                                    </p>
                                    <p className="comment-form-cookies-consent">
                                      <input
                                        id="wp-comment-cookies-consent"
                                        name="wp-comment-cookies-consent"
                                        type="checkbox"
                                        defaultValue="yes"
                                      />{' '}
                                      <label htmlFor="wp-comment-cookies-consent">
                                        Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế
                                        tiếp của tôi.
                                      </label>
                                    </p>
                                    <p className="form-submit">
                                      <input
                                        name="submit"
                                        type="submit"
                                        id="submit"
                                        className="submit"
                                        defaultValue="Gửi đi"
                                      />{' '}
                                      <input
                                        type="hidden"
                                        name="comment_post_ID"
                                        defaultValue={3697}
                                        id="comment_post_ID"
                                      />
                                      <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                    </p>
                                  </form>{' '}
                                </div>
                                {/* #respond */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <a className="accordion-title plain" href="javascript:void();">
                        <button className="toggle">
                          <i className="icon-angle-down" />
                        </button>
                        Hướng dẫn thanh toán{' '}
                      </a>
                      <div className="accordion-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="col-1852040723" className="col medium-4 small-12 large-4">
              <div className="col-inner" style={{ backgroundColor: 'rgb(251, 240, 240)' }}>
                <p>
                  <span style={{ color: '#000000', fontSize: '130%' }}>
                    <strong>Sản phẩm mới</strong>
                  </span>
                </p>
                <ul className="product_list_widget">
                  <li>
                    <a
                      href="https://chongthamnguyenphat.com/san-pham/chong-tham-pha-xi-mang-ak-seal/"
                      title="Chống thấm pha xi măng AK-Seal"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png"
                        className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                        alt=""
                        loading="lazy"
                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w"
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chống thấm pha xi măng AK-Seal</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a
                      href="https://chongthamnguyenphat.com/san-pham/chong-tham-acrylic-ak-800/"
                      title="Chống Thấm Acrylic AK-800"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png"
                        className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                        alt=""
                        loading="lazy"
                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png 300w"
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chống Thấm Acrylic AK-800</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a
                      href="https://chongthamnguyenphat.com/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/"
                      title="AK- PU1000 (Chống thấm Polyurethane Gốc Nước)"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                        className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                        alt=""
                        loading="lazy"
                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w"
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">AK- PU1000 (Chống thấm Polyurethane Gốc Nước)</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a
                      href="https://chongthamnguyenphat.com/san-pham/thanh-chen-khe-backer-rod/"
                      title="Backer rod Thanh Chèn Khe"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg"
                        className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                        alt=""
                        loading="lazy"
                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-768x768.jpg 768w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-600x600.jpg 600w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1.jpg 800w"
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-768x768.jpg 768w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-600x600.jpg 600w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1.jpg 800w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Backer rod Thanh Chèn Khe</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a
                      href="https://chongthamnguyenphat.com/san-pham/chai-xit-chong-tham-ak-plex/"
                      title="Chai xịt chống thấm AK-Plex"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg"
                        className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                        alt=""
                        loading="lazy"
                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg 300w"
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chai xịt chống thấm AK-Plex</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://chongthamnguyenphat.com/san-pham/epoxy-ak-1401/" title="Epoxy AK-1401">
                      <img
                        width={100}
                        height={100}
                        src="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg"
                        className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                        alt=""
                        loading="lazy"
                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-300x300.jpg 300w"
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-300x300.jpg 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Epoxy AK-1401</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                </ul>
                <ul className="sidebar-wrapper ul-reset" />
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html: '\n#col-1852040723 > .col-inner {\n  padding: 10px 10px 10px 10px;\n}\n'
                }}
              />
            </div>
          </div>
          <section className="section sp-lien-quan" id="section_1300839607">
            <div className="bg section-bg fill bg-fill bg-loaded">
              <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
            </div>
            <div className="section-content relative">
              <div className="row" id="row-1749262871">
                <div id="col-1302321468" className="col small-12 large-12">
                  <div className="col-inner">
                    <p>
                      <span style={{ fontSize: '120%' }}>
                        <strong>
                          <span style={{ color: '#000000' }}>Sản phẩm cùng danh mục:</span>
                        </strong>
                      </span>
                    </p>
                    <div
                      className="row large-columns-5 medium-columns-3 small-columns-2 row-small row-full-width has-shadow row-box-shadow-1 slider row-slider slider-nav-simple slider-nav-outside slider-nav-push is-draggable flickity-enabled slider-lazy-load-active"
                      data-flickity-options='{"imagesLoaded": true, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": true,"percentPosition": true,"pageDots": false, "rightToLeft": false, "autoPlay" : false}'
                      tabIndex={0}
                    >
                      <div className="flickity-viewport" style={{ height: '345.641px', touchAction: 'pan-y' }}>
                        <div
                          className="flickity-slider"
                          style={{ left: '0px', transform: 'translateX(-120%)', display: 'flex', alignItems: 'center' }}
                        >
                          <div
                            className="col is-selected"
                            aria-selected="true"
                            style={{ position: 'absolute', left: '120%' }}
                          >
                            <div className="col-inner">
                              <div className="badge-container absolute left top z-1"></div>
                              <div className="product-small box has-hover box-normal box-text-bottom">
                                <div className="box-image">
                                  <div className="image-cover" style={{ paddingTop: '100%' }}>
                                    <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-pha-xi-mang-ak-seal/">
                                      <img
                                        width={300}
                                        height={300}
                                        src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png"
                                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                        alt=""
                                        loading="lazy"
                                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w"
                                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w"
                                        sizes="(max-width: 300px) 100vw, 300px"
                                      />{' '}
                                    </a>
                                  </div>
                                  <div className="image-tools top right show-on-hover"></div>
                                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="title-wrapper">
                                    <p className="name product-title woocommerce-loop-product__title">
                                      <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-pha-xi-mang-ak-seal/">
                                        Chống thấm pha xi măng AK-Seal
                                      </a>
                                    </p>
                                  </div>
                                  <div className="price-wrapper">
                                    <span className="price">
                                      <span className="rrp-price">Giá cũ: </span>
                                      <span className="amount">Giá: Liên hệ</span>
                                    </span>
                                  </div>{' '}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col is-selected"
                            aria-selected="true"
                            style={{ position: 'absolute', left: '140%' }}
                          >
                            <div className="col-inner">
                              <div className="badge-container absolute left top z-1"></div>
                              <div className="product-small box has-hover box-normal box-text-bottom">
                                <div className="box-image">
                                  <div className="image-cover" style={{ paddingTop: '100%' }}>
                                    <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-acrylic-ak-800/">
                                      <img
                                        width={300}
                                        height={300}
                                        src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png"
                                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                        alt=""
                                        loading="lazy"
                                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png 100w"
                                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png 100w"
                                        sizes="(max-width: 300px) 100vw, 300px"
                                      />{' '}
                                    </a>
                                  </div>
                                  <div className="image-tools top right show-on-hover"></div>
                                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="title-wrapper">
                                    <p className="name product-title woocommerce-loop-product__title">
                                      <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-acrylic-ak-800/">
                                        Chống Thấm Acrylic AK-800
                                      </a>
                                    </p>
                                  </div>
                                  <div className="price-wrapper">
                                    <span className="price">
                                      <span className="rrp-price">Giá cũ: </span>
                                      <span className="amount">Giá: Liên hệ</span>
                                    </span>
                                  </div>{' '}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col is-selected"
                            aria-selected="true"
                            style={{ position: 'absolute', left: '160%' }}
                          >
                            <div className="col-inner">
                              <div className="badge-container absolute left top z-1"></div>
                              <div className="product-small box has-hover box-normal box-text-bottom">
                                <div className="box-image">
                                  <div className="image-cover" style={{ paddingTop: '100%' }}>
                                    <a href="https://chongthamnguyenphat.com/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/">
                                      <img
                                        width={300}
                                        height={300}
                                        src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png"
                                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                        alt=""
                                        loading="lazy"
                                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w"
                                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w"
                                        sizes="(max-width: 300px) 100vw, 300px"
                                      />{' '}
                                    </a>
                                  </div>
                                  <div className="image-tools top right show-on-hover"></div>
                                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="title-wrapper">
                                    <p className="name product-title woocommerce-loop-product__title">
                                      <a href="https://chongthamnguyenphat.com/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/">
                                        AK- PU1000 (Chống thấm Polyurethane Gốc Nước)
                                      </a>
                                    </p>
                                  </div>
                                  <div className="price-wrapper">
                                    <span className="price">
                                      <span className="rrp-price">Giá cũ: </span>
                                      <span className="amount">Giá: Liên hệ</span>
                                    </span>
                                  </div>{' '}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col is-selected"
                            aria-selected="true"
                            style={{ position: 'absolute', left: '180%' }}
                          >
                            <div className="col-inner">
                              <div className="badge-container absolute left top z-1"></div>
                              <div className="product-small box has-hover box-normal box-text-bottom">
                                <div className="box-image">
                                  <div className="image-cover" style={{ paddingTop: '100%' }}>
                                    <a href="https://chongthamnguyenphat.com/san-pham/thanh-chen-khe-backer-rod/">
                                      <img
                                        width={300}
                                        height={300}
                                        src="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg"
                                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                        alt=""
                                        loading="lazy"
                                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-768x768.jpg 768w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-600x600.jpg 600w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1.jpg 800w"
                                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-768x768.jpg 768w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-600x600.jpg 600w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1.jpg 800w"
                                        sizes="(max-width: 300px) 100vw, 300px"
                                      />{' '}
                                    </a>
                                  </div>
                                  <div className="image-tools top right show-on-hover"></div>
                                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="title-wrapper">
                                    <p className="name product-title woocommerce-loop-product__title">
                                      <a href="https://chongthamnguyenphat.com/san-pham/thanh-chen-khe-backer-rod/">
                                        Backer rod Thanh Chèn Khe
                                      </a>
                                    </p>
                                  </div>
                                  <div className="price-wrapper">
                                    <span className="price">
                                      <span className="rrp-price">Giá cũ: </span>
                                      <span className="amount">Giá: Liên hệ</span>
                                    </span>
                                  </div>{' '}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col is-selected"
                            aria-selected="true"
                            style={{ position: 'absolute', left: '200%' }}
                          >
                            <div className="col-inner">
                              <div className="badge-container absolute left top z-1"></div>
                              <div className="product-small box has-hover box-normal box-text-bottom">
                                <div className="box-image">
                                  <div className="image-cover" style={{ paddingTop: '100%' }}>
                                    <a href="https://chongthamnguyenphat.com/san-pham/chai-xit-chong-tham-ak-plex/">
                                      <img
                                        width={300}
                                        height={300}
                                        src="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg"
                                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                        alt=""
                                        loading="lazy"
                                        srcSet="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg 100w"
                                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg 100w"
                                        sizes="(max-width: 300px) 100vw, 300px"
                                      />{' '}
                                    </a>
                                  </div>
                                  <div className="image-tools top right show-on-hover"></div>
                                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="title-wrapper">
                                    <p className="name product-title woocommerce-loop-product__title">
                                      <a href="https://chongthamnguyenphat.com/san-pham/chai-xit-chong-tham-ak-plex/">
                                        Chai xịt chống thấm AK-Plex
                                      </a>
                                    </p>
                                  </div>
                                  <div className="price-wrapper">
                                    <span className="price">
                                      <span className="rrp-price">Giá cũ: </span>
                                      <span className="amount">Giá: Liên hệ</span>
                                    </span>
                                  </div>{' '}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col" aria-selected="false" style={{ position: 'absolute', left: '100%' }}>
                            <div className="col-inner">
                              <div className="badge-container absolute left top z-1"></div>
                              <div className="product-small box has-hover box-normal box-text-bottom">
                                <div className="box-image">
                                  <div className="image-cover" style={{ paddingTop: '100%' }}>
                                    <a href="https://chongthamnguyenphat.com/san-pham/epoxy-ak-1401/">
                                      <img
                                        width={300}
                                        height={300}
                                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20300%20300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-300x300.jpg"
                                        className="lazy-load attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                        alt=""
                                        loading="lazy"
                                        srcSet=""
                                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg 100w"
                                        sizes="(max-width: 300px) 100vw, 300px"
                                      />{' '}
                                    </a>
                                  </div>
                                  <div className="image-tools top right show-on-hover"></div>
                                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="title-wrapper">
                                    <p className="name product-title woocommerce-loop-product__title">
                                      <a href="https://chongthamnguyenphat.com/san-pham/epoxy-ak-1401/">Epoxy AK-1401</a>
                                    </p>
                                  </div>
                                  <div className="price-wrapper">
                                    <span className="price">
                                      <span className="rrp-price">Giá cũ: </span>
                                      <span className="amount">Giá: Liên hệ</span>
                                    </span>
                                  </div>{' '}
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
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n#section_1300839607 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  background-color: rgb(255, 255, 255);\n}\n'
              }}
            />
          </section>
          <div id="product-sidebar" className="mfp-hide">
            <div className="sidebar-inner">
              <div className="hide-for-off-canvas" style={{ width: '100%' }}>
                <ul className="next-prev-thumbs is-small nav-right text-right">
                  {' '}
                  <li className="prod-dropdown has-dropdown">
                    <a
                      href="https://chongthamnguyenphat.com/san-pham/epoxy-ak-1401/"
                      rel="next"
                      className="button icon is-outline circle"
                    >
                      <i className="icon-angle-right" />{' '}
                    </a>
                    <div className="nav-dropdown">
                      <a title="Epoxy AK-1401" href="https://chongthamnguyenphat.com/san-pham/epoxy-ak-1401/">
                        <img
                          width={100}
                          height={100}
                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                          data-src="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg"
                          className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image"
                          alt=""
                          loading="lazy"
                          srcSet=""
                          data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-300x300.jpg 300w"
                          sizes="(max-width: 100px) 100vw, 100px"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <aside id="woocommerce_product_categories-3" className="widget woocommerce widget_product_categories">
                <span className="widget-title shop-sidebar">Danh mục sản phẩm</span>
                <div className="is-divider small" />
                <ul className="product-categories">
                  <li className="cat-item cat-item-79 cat-parent has-child" aria-expanded="false">
                    <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/">Keo xử lý rò rỉ nước</a>{' '}
                    <span className="count">(43)</span>
                    <button className="toggle">
                      <i className="icon-angle-down" />
                    </button>
                    <ul className="children">
                      <li className="cat-item cat-item-90">
                        <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/chong-tham-san/">Chống thấm sàn</a>{' '}
                        <span className="count">(16)</span>
                      </li>
                      <li className="cat-item cat-item-82">
                        <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/epoxy-san-cong-nghiep/">
                          Epoxy sàn công nghiệp
                        </a>{' '}
                        <span className="count">(1)</span>
                      </li>
                      <li className="cat-item cat-item-83">
                        <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/phu-kien-ho-tro/">Phụ kiện hỗ trợ</a>{' '}
                        <span className="count">(10)</span>
                      </li>
                      <li className="cat-item cat-item-84">
                        <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/water-stop-pvc/">Water stop PVC</a>{' '}
                        <span className="count">(2)</span>
                      </li>
                      <li className="cat-item cat-item-85">
                        <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/xu-li-nut-be-tong/">
                          Xử lí nứt bê tông
                        </a>{' '}
                        <span className="count">(5)</span>
                      </li>
                      <li className="cat-item cat-item-81">
                        <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/xu-li-ro-ri-nuoc/">
                          Xử lí rò rỉ nước
                        </a>{' '}
                        <span className="count">(5)</span>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-89 cat-parent has-child" aria-expanded="false">
                    <a href="https://chongthamnguyenphat.com/danh-muc/quy-trinh-bom-keo-pu/">Quy trình thi công bơm keo</a>{' '}
                    <span className="count">(3)</span>
                    <button className="toggle">
                      <i className="icon-angle-down" />
                    </button>
                    <ul className="children">
                      <li className="cat-item cat-item-80">
                        <a href="https://chongthamnguyenphat.com/danh-muc/quy-trinh-bom-keo-pu/quy-trinh-chong-nut/">
                          Quy trình chống nứt
                        </a>{' '}
                        <span className="count">(2)</span>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-15 current-cat active">
                    <a href="https://chongthamnguyenphat.com/danh-muc/sp-chong-tham-test/">Sản phẩm chống thấm test</a>{' '}
                    <span className="count">(3)</span>
                  </li>
                  <li className="cat-item cat-item-86">
                    <a href="https://chongthamnguyenphat.com/danh-muc/tai-lieu-thi-cong-thi-cong-chong-tham/">
                      Tài liệu thi công - thi công chống thấm
                    </a>{' '}
                    <span className="count">(10)</span>
                  </li>
                </ul>
              </aside>
              <aside id="woocommerce_products-3" className="widget woocommerce widget_products">
                <span className="widget-title shop-sidebar">Sản phẩm mới nhất</span>
                <div className="is-divider small" />
                <ul className="product_list_widget">
                  <li>
                    <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-pha-xi-mang-ak-seal/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chống thấm pha xi măng AK-Seal</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-acrylic-ak-800/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chống Thấm Acrylic AK-800</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://chongthamnguyenphat.com/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">AK- PU1000 (Chống thấm Polyurethane Gốc Nước)</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://chongthamnguyenphat.com/san-pham/thanh-chen-khe-backer-rod/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-768x768.jpg 768w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-600x600.jpg 600w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1.jpg 800w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Backer rod Thanh Chèn Khe</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://chongthamnguyenphat.com/san-pham/chai-xit-chong-tham-ak-plex/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chai xịt chống thấm AK-Plex</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                </ul>
              </aside>
              <aside id="woocommerce_product_tag_cloud-7" className="widget woocommerce widget_product_tag_cloud">
                <span className="widget-title shop-sidebar">Từ khóa sản phẩm</span>
                <div className="is-divider small" />
                <div className="tagcloud">
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/3b-100/"
                    className="tag-cloud-link tag-link-139 tag-link-position-1"
                    style={{ fontSize: '8pt' }}
                    aria-label="3b-100 (1 sản phẩm)"
                  >
                    3b-100
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/3b-800/"
                    className="tag-cloud-link tag-link-132 tag-link-position-2"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="3b-800 (2 sản phẩm)"
                  >
                    3b-800
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/acrylic/"
                    className="tag-cloud-link tag-link-115 tag-link-position-3"
                    style={{ fontSize: '8pt' }}
                    aria-label="acrylic (1 sản phẩm)"
                  >
                    acrylic
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/acrylic-sl800/"
                    className="tag-cloud-link tag-link-114 tag-link-position-4"
                    style={{ fontSize: '8pt' }}
                    aria-label="acrylic sl800 (1 sản phẩm)"
                  >
                    acrylic sl800
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/bien-phap-thi-cong-chong-tham-bang-sika/"
                    className="tag-cloud-link tag-link-161 tag-link-position-5"
                    style={{ fontSize: '22pt' }}
                    aria-label="biện pháp thi công chống thấm bằng sika (3 sản phẩm)"
                  >
                    biện pháp thi công chống thấm bằng sika
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/bien-phap-thi-cong-chong-tham-be-nuoc-sinh-hoat/"
                    className="tag-cloud-link tag-link-165 tag-link-position-6"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="biện pháp thi công chống thấm bể nước sinh hoạt (2 sản phẩm)"
                  >
                    biện pháp thi công chống thấm bể nước sinh hoạt
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/bang-can-nuoc/"
                    className="tag-cloud-link tag-link-125 tag-link-position-7"
                    style={{ fontSize: '8pt' }}
                    aria-label="băng cản nước (1 sản phẩm)"
                  >
                    băng cản nước
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-nut-san-be-tong/"
                    className="tag-cloud-link tag-link-157 tag-link-position-8"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống nứt sàn bê tông (2 sản phẩm)"
                  >
                    chống nứt sàn bê tông
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-nut-san-bang-may-bom-keo-sl500/"
                    className="tag-cloud-link tag-link-160 tag-link-position-9"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống nứt sàn bằng máy bơm keo Sl500 (2 sản phẩm)"
                  >
                    chống nứt sàn bằng máy bơm keo Sl500
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-be-nuoc/"
                    className="tag-cloud-link tag-link-167 tag-link-position-10"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống thấm bể nước (2 sản phẩm)"
                  >
                    chống thấm bể nước
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-be-nuoc-uong/"
                    className="tag-cloud-link tag-link-164 tag-link-position-11"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống thấm bể nước uống (2 sản phẩm)"
                  >
                    chống thấm bể nước uống
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-ho-pit-thang-may/"
                    className="tag-cloud-link tag-link-137 tag-link-position-12"
                    style={{ fontSize: '8pt' }}
                    aria-label="chống thấm hố pit thang máy (1 sản phẩm)"
                  >
                    chống thấm hố pit thang máy
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san/"
                    className="tag-cloud-link tag-link-136 tag-link-position-13"
                    style={{ fontSize: '8pt' }}
                    aria-label="chống thấm sàn (1 sản phẩm)"
                  >
                    chống thấm sàn
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san-mai/"
                    className="tag-cloud-link tag-link-182 tag-link-position-14"
                    style={{ fontSize: '22pt' }}
                    aria-label="Chống thấm sàn Mái (3 sản phẩm)"
                  >
                    Chống thấm sàn Mái
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san-nha/"
                    className="tag-cloud-link tag-link-135 tag-link-position-15"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống thấm sàn nhà (2 sản phẩm)"
                  >
                    chống thấm sàn nhà
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san-nha-bang-sl-200/"
                    className="tag-cloud-link tag-link-134 tag-link-position-16"
                    style={{ fontSize: '8pt' }}
                    aria-label="Chống Thấm Sàn Nhà bằng SL-200 (1 sản phẩm)"
                  >
                    Chống Thấm Sàn Nhà bằng SL-200
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/db2015/"
                    className="tag-cloud-link tag-link-98 tag-link-position-17"
                    style={{ fontSize: '8pt' }}
                    aria-label="db2015 (1 sản phẩm)"
                  >
                    db2015
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/hyperstop/"
                    className="tag-cloud-link tag-link-97 tag-link-position-18"
                    style={{ fontSize: '8pt' }}
                    aria-label="hyperstop (1 sản phẩm)"
                  >
                    hyperstop
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/hyperstop-db2015/"
                    className="tag-cloud-link tag-link-96 tag-link-position-19"
                    style={{ fontSize: '8pt' }}
                    aria-label="hyperstop db2015 (1 sản phẩm)"
                  >
                    hyperstop db2015
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-acrylic/"
                    className="tag-cloud-link tag-link-113 tag-link-position-20"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo chống thấm acrylic (1 sản phẩm)"
                  >
                    keo chống thấm acrylic
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-cho-tuong-3b-800/"
                    className="tag-cloud-link tag-link-133 tag-link-position-21"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo chống thấm cho tường 3b-800 (1 sản phẩm)"
                  >
                    Keo chống thấm cho tường 3b-800
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-ho-boi/"
                    className="tag-cloud-link tag-link-131 tag-link-position-22"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo chống thấm hồ Bơi (1 sản phẩm)"
                  >
                    Keo chống thấm hồ Bơi
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-ho-boi-sl200/"
                    className="tag-cloud-link tag-link-128 tag-link-position-23"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo chống thấm hồ Bơi SL200 (1 sản phẩm)"
                  >
                    Keo chống thấm hồ Bơi SL200
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-tron-ximang-3b-100/"
                    className="tag-cloud-link tag-link-138 tag-link-position-24"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo chống thấm trộn ximăng 3B-100 (1 sản phẩm)"
                  >
                    keo chống thấm trộn ximăng 3B-100
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-dan-hoi/"
                    className="tag-cloud-link tag-link-112 tag-link-position-25"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo chống thấm đàn hồi (1 sản phẩm)"
                  >
                    keo chống thấm đàn hồi
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-dan-da/"
                    className="tag-cloud-link tag-link-121 tag-link-position-26"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo dán đá (1 sản phẩm)"
                  >
                    Keo dán đá
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-dan-da-epoxy-resin/"
                    className="tag-cloud-link tag-link-123 tag-link-position-27"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo dán đá Epoxy Resin (1 sản phẩm)"
                  >
                    Keo dán đá Epoxy Resin
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-dan-da-goc-epoxy/"
                    className="tag-cloud-link tag-link-122 tag-link-position-28"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo dán đá gốc epoxy (1 sản phẩm)"
                  >
                    keo dán đá gốc epoxy
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-pu-sl-668/"
                    className="tag-cloud-link tag-link-107 tag-link-position-29"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo pu sl-668 (1 sản phẩm)"
                  >
                    keo pu sl-668
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-pu-sl668/"
                    className="tag-cloud-link tag-link-103 tag-link-position-30"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo pu sl668 (1 sản phẩm)"
                  >
                    keo pu sl668
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/keo-pu-truong-no/"
                    className="tag-cloud-link tag-link-105 tag-link-position-31"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="keo pu trương nở (2 sản phẩm)"
                  >
                    keo pu trương nở
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/kim-bom-keo/"
                    className="tag-cloud-link tag-link-99 tag-link-position-32"
                    style={{ fontSize: '8pt' }}
                    aria-label="kim bơm keo (1 sản phẩm)"
                  >
                    kim bơm keo
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/kim-bom-keo-pu/"
                    className="tag-cloud-link tag-link-100 tag-link-position-33"
                    style={{ fontSize: '8pt' }}
                    aria-label="kim bơm keo pu (1 sản phẩm)"
                  >
                    kim bơm keo pu
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/luoi-thuy-tinh/"
                    className="tag-cloud-link tag-link-119 tag-link-position-34"
                    style={{ fontSize: '8pt' }}
                    aria-label="lưới thủy tinh (1 sản phẩm)"
                  >
                    lưới thủy tinh
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/luoi-thuy-tinh-chong-nut/"
                    className="tag-cloud-link tag-link-120 tag-link-position-35"
                    style={{ fontSize: '8pt' }}
                    aria-label="lưới thủy tinh chống nứt (1 sản phẩm)"
                  >
                    lưới thủy tinh chống nứt
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/pu-sl-668/"
                    className="tag-cloud-link tag-link-106 tag-link-position-36"
                    style={{ fontSize: '8pt' }}
                    aria-label="pu sl-668 (1 sản phẩm)"
                  >
                    pu sl-668
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/pvc-v15/"
                    className="tag-cloud-link tag-link-126 tag-link-position-37"
                    style={{ fontSize: '8pt' }}
                    aria-label="PVC V15 (1 sản phẩm)"
                  >
                    PVC V15
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/sl-200/"
                    className="tag-cloud-link tag-link-130 tag-link-position-38"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="SL-200 (2 sản phẩm)"
                  >
                    SL-200
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/sl200/"
                    className="tag-cloud-link tag-link-129 tag-link-position-39"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="SL200 (2 sản phẩm)"
                  >
                    SL200
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/sl668/"
                    className="tag-cloud-link tag-link-104 tag-link-position-40"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="sl668 (2 sản phẩm)"
                  >
                    sl668
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/sl800/"
                    className="tag-cloud-link tag-link-111 tag-link-position-41"
                    style={{ fontSize: '8pt' }}
                    aria-label="sl800 (1 sản phẩm)"
                  >
                    sl800
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/thanh-truong-no/"
                    className="tag-cloud-link tag-link-95 tag-link-position-42"
                    style={{ fontSize: '8pt' }}
                    aria-label="thanh trương nở (1 sản phẩm)"
                  >
                    thanh trương nở
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/thanh-truong-no-hyperstop-db2015/"
                    className="tag-cloud-link tag-link-94 tag-link-position-43"
                    style={{ fontSize: '8pt' }}
                    aria-label="Thanh trương nở hyperstop db2015 (1 sản phẩm)"
                  >
                    Thanh trương nở hyperstop db2015
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/waterstop/"
                    className="tag-cloud-link tag-link-127 tag-link-position-44"
                    style={{ fontSize: '8pt' }}
                    aria-label="Waterstop (1 sản phẩm)"
                  >
                    Waterstop
                  </a>
                  <a
                    href="https://chongthamnguyenphat.com/tu-khoa/waterstop-pvc-v15/"
                    className="tag-cloud-link tag-link-124 tag-link-position-45"
                    style={{ fontSize: '8pt' }}
                    aria-label="Waterstop PVC V15 (1 sản phẩm)"
                  >
                    Waterstop PVC V15
                  </a>
                </div>
              </aside>
              <aside id="custom_html-2" className="widget_text widget widget_custom_html">
                <div className="textwidget custom-html-widget" />
              </aside>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
