import React from 'react';
import { apollo } from '@/api/index';
import { productGQL } from '@/geters/product';
import Link from 'next/link';

export async function getStaticProps() {
  const result = await apollo.query({ query: productGQL });
  const data = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    data[key] = element?.nodes || element?.posts || [];
  });
  const { products } = data;
  console.log(products, 'products');
  return { props: { products }, revalidate: 10 * 60 * 1000 };
}
const Product = ({ products }) => {
  return (
    <div>
      <div class="shop-page-title category-page-title page-title snipcss-HrhkE container">
        <div class="page-title-inner flex-row  medium-flex-wrap ">
          <div class="flex-col flex-grow medium-text-center">
            <h1 class="shop-page-title is-xlarge snip-h1">Cửa hàng</h1>
            <div class="is-small">
              <nav class="woocommerce-breadcrumb breadcrumbs uppercase snip-nav">
                <a href="https://nhaankhang.com" class="snip-a">
                  Trang chủ
                </a>
                <span class="divider">/</span>
                Cửa hàng
              </nav>
            </div>
            <div class="category-filtering category-filter-row ">
              <a href="#" data-open="#shop-sidebar" data-pos="left" class="filter-button uppercase plain snip-a">
                <i class="icon-equalizer"> </i>
                <strong> Lọc sản phẩm</strong>
              </a>
              <div class="inline-block"></div>
            </div>
          </div>
          <div class="flex-col medium-text-center">
            <p class="woocommerce-result-count hide-for-medium snip-p">Showing 1–50 of 53 results</p>
            <form class="woocommerce-ordering" method="get">
              <select name="orderby" class="orderby" aria-label="Đơn hàng của cửa hàng">
                <option value="menu_order" selected="selected">
                  Thứ tự mặc định
                </option>
                <option value="popularity">Thứ tự theo mức độ phổ biến</option>
                <option value="rating">Thứ tự theo điểm đánh giá</option>
                <option value="date">Mới nhất</option>
                <option value="price">Thứ tự theo giá: thấp đến cao</option>
                <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
              </select>
              <input type="hidden" name="paged" value="1" />
            </form>
          </div>
        </div>
        <div className="row category-page-row">
          <div className="col large-12">
            <div className="shop-container">
              <div className="woocommerce-notices-wrapper" />
              <div className="products row row-small large-columns-4 medium-columns-3 small-columns-2 has-equal-box-heights">
                {products.map((item) => (
                  <div className="product-small col has-hover product type-product post-3697 status-publish first instock product_cat-xu-ly-ro-ri-nuoc product_cat-sp-chong-tham-test product_tag-chong-tham-san-mai product_tag-chong-tham-san-thuong product_tag-keo-chong-tham-lo-thien product_tag-pu-goc-nuoc product_tag-pu-he-nuoc has-post-thumbnail shipping-taxable product-type-simple">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-none">
                            <Link href={`/san-pham/${item.id}`}>
                              <img
                                width={300}
                                height={300}
                                src={item.image.sourceUrl}
                                data-src="https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                alt={item.image.title}
                                loading="lazy"
                                srcSet={item.image.srcSet}
                                data-srcset="https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w"
                                sizes="(max-width: 300px) 100vw, 300px"
                              />
                            </Link>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>
                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            <p className="name product-title woocommerce-loop-product__title">
                              <Link href={`/san-pham/${item.slug}`}>{item.name}</Link>
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
                ))}
              </div>
              {/* row */}
              {/* <div className="container">
                <nav className="woocommerce-pagination">
                  <ul className="page-numbers nav-pagination links text-center">
                    <li>
                      <span aria-current="page" className="page-number current">
                        1
                      </span>
                    </li>
                    <li>
                      <a className="page-number" href="https://nhaankhang.com/cua-hang/page/2/">
                        2
                      </a>
                    </li>
                    <li>
                      <a className="next page-number" href="https://nhaankhang.com/cua-hang/page/2/">
                        <i className="icon-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
            {/* shop container */}
          </div>
          <div id="shop-sidebar" className="mfp-hide">
            <div className="sidebar-inner">
              <aside id="woocommerce_product_categories-3" className="widget woocommerce widget_product_categories">
                <span className="widget-title shop-sidebar">Danh mục sản phẩm</span>
                <div className="is-divider small" />
                <ul className="product-categories">
                  <li className="cat-item cat-item-79 cat-parent has-child" aria-expanded="false">
                    <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/">Keo xử lý rò rỉ nước</a>{' '}
                    <span className="count">(43)</span>
                    <button className="toggle">
                      <i className="icon-angle-down" />
                    </button>
                    <ul className="children">
                      <li className="cat-item cat-item-90">
                        <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/chong-tham-san/">Chống thấm sàn</a>{' '}
                        <span className="count">(16)</span>
                      </li>
                      <li className="cat-item cat-item-82">
                        <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/epoxy-san-cong-nghiep/">
                          Epoxy sàn công nghiệp
                        </a>{' '}
                        <span className="count">(1)</span>
                      </li>
                      <li className="cat-item cat-item-83">
                        <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/phu-kien-ho-tro/">Phụ kiện hỗ trợ</a>{' '}
                        <span className="count">(10)</span>
                      </li>
                      <li className="cat-item cat-item-84">
                        <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/water-stop-pvc/">Water stop PVC</a>{' '}
                        <span className="count">(2)</span>
                      </li>
                      <li className="cat-item cat-item-85">
                        <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/xu-li-nut-be-tong/">
                          Xử lí nứt bê tông
                        </a>{' '}
                        <span className="count">(5)</span>
                      </li>
                      <li className="cat-item cat-item-81">
                        <a href="https://nhaankhang.com/danh-muc/xu-ly-ro-ri-nuoc/xu-li-ro-ri-nuoc/">
                          Xử lí rò rỉ nước
                        </a>{' '}
                        <span className="count">(5)</span>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-89 cat-parent has-child" aria-expanded="false">
                    <a href="https://nhaankhang.com/danh-muc/quy-trinh-bom-keo-pu/">Quy trình thi công bơm keo</a>{' '}
                    <span className="count">(3)</span>
                    <button className="toggle">
                      <i className="icon-angle-down" />
                    </button>
                    <ul className="children">
                      <li className="cat-item cat-item-80">
                        <a href="https://nhaankhang.com/danh-muc/quy-trinh-bom-keo-pu/quy-trinh-chong-nut/">
                          Quy trình chống nứt
                        </a>{' '}
                        <span className="count">(2)</span>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-15">
                    <a href="https://nhaankhang.com/danh-muc/sp-chong-tham-test/">Sản phẩm chống thấm test</a>{' '}
                    <span className="count">(3)</span>
                  </li>
                  <li className="cat-item cat-item-86">
                    <a href="https://nhaankhang.com/danh-muc/tai-lieu-thi-cong-thi-cong-chong-tham/">
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
                    <a href="https://nhaankhang.com/san-pham/chong-tham-pha-xi-mang-ak-seal/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://nhaankhang.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://nhaankhang.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chống thấm pha xi măng AK-Seal</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://nhaankhang.com/san-pham/chong-tham-acrylic-ak-800/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://nhaankhang.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://nhaankhang.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png 100w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-150x150.png 150w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Chống Thấm Acrylic AK-800</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://nhaankhang.com/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://nhaankhang.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">AK- PU1000 (Chống thấm Polyurethane Gốc Nước)</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://nhaankhang.com/san-pham/thanh-chen-khe-backer-rod/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://nhaankhang.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://nhaankhang.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg 100w, https://nhaankhang.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg 300w, https://nhaankhang.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-150x150.jpg 150w, https://nhaankhang.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-768x768.jpg 768w, https://nhaankhang.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-600x600.jpg 600w, https://nhaankhang.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1.jpg 800w"
                        sizes="(max-width: 100px) 100vw, 100px"
                      />{' '}
                      <span className="product-title">Backer rod Thanh Chèn Khe</span>
                    </a>
                    <span className="rrp-price">Giá cũ: </span>
                    <span className="amount">Giá: Liên hệ</span>
                  </li>
                  <li>
                    <a href="https://nhaankhang.com/san-pham/chai-xit-chong-tham-ak-plex/">
                      <img
                        width={100}
                        height={100}
                        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                        data-src="https://nhaankhang.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg"
                        className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet=""
                        data-srcset="https://nhaankhang.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg 100w, https://nhaankhang.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-150x150.jpg 150w, https://nhaankhang.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg 300w"
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
                    href="https://nhaankhang.com/tu-khoa/3b-100/"
                    className="tag-cloud-link tag-link-139 tag-link-position-1"
                    style={{ fontSize: '8pt' }}
                    aria-label="3b-100 (1 sản phẩm)"
                  >
                    3b-100
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/3b-800/"
                    className="tag-cloud-link tag-link-132 tag-link-position-2"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="3b-800 (2 sản phẩm)"
                  >
                    3b-800
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/acrylic/"
                    className="tag-cloud-link tag-link-115 tag-link-position-3"
                    style={{ fontSize: '8pt' }}
                    aria-label="acrylic (1 sản phẩm)"
                  >
                    acrylic
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/acrylic-sl800/"
                    className="tag-cloud-link tag-link-114 tag-link-position-4"
                    style={{ fontSize: '8pt' }}
                    aria-label="acrylic sl800 (1 sản phẩm)"
                  >
                    acrylic sl800
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/bien-phap-thi-cong-chong-tham-bang-sika/"
                    className="tag-cloud-link tag-link-161 tag-link-position-5"
                    style={{ fontSize: '22pt' }}
                    aria-label="biện pháp thi công chống thấm bằng sika (3 sản phẩm)"
                  >
                    biện pháp thi công chống thấm bằng sika
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/bien-phap-thi-cong-chong-tham-be-nuoc-sinh-hoat/"
                    className="tag-cloud-link tag-link-165 tag-link-position-6"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="biện pháp thi công chống thấm bể nước sinh hoạt (2 sản phẩm)"
                  >
                    biện pháp thi công chống thấm bể nước sinh hoạt
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/bang-can-nuoc/"
                    className="tag-cloud-link tag-link-125 tag-link-position-7"
                    style={{ fontSize: '8pt' }}
                    aria-label="băng cản nước (1 sản phẩm)"
                  >
                    băng cản nước
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-nut-san-be-tong/"
                    className="tag-cloud-link tag-link-157 tag-link-position-8"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống nứt sàn bê tông (2 sản phẩm)"
                  >
                    chống nứt sàn bê tông
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-nut-san-bang-may-bom-keo-sl500/"
                    className="tag-cloud-link tag-link-160 tag-link-position-9"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống nứt sàn bằng máy bơm keo Sl500 (2 sản phẩm)"
                  >
                    chống nứt sàn bằng máy bơm keo Sl500
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-tham-be-nuoc/"
                    className="tag-cloud-link tag-link-167 tag-link-position-10"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống thấm bể nước (2 sản phẩm)"
                  >
                    chống thấm bể nước
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-tham-be-nuoc-uong/"
                    className="tag-cloud-link tag-link-164 tag-link-position-11"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống thấm bể nước uống (2 sản phẩm)"
                  >
                    chống thấm bể nước uống
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-tham-ho-pit-thang-may/"
                    className="tag-cloud-link tag-link-137 tag-link-position-12"
                    style={{ fontSize: '8pt' }}
                    aria-label="chống thấm hố pit thang máy (1 sản phẩm)"
                  >
                    chống thấm hố pit thang máy
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-tham-san/"
                    className="tag-cloud-link tag-link-136 tag-link-position-13"
                    style={{ fontSize: '8pt' }}
                    aria-label="chống thấm sàn (1 sản phẩm)"
                  >
                    chống thấm sàn
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-tham-san-mai/"
                    className="tag-cloud-link tag-link-182 tag-link-position-14"
                    style={{ fontSize: '22pt' }}
                    aria-label="Chống thấm sàn Mái (3 sản phẩm)"
                  >
                    Chống thấm sàn Mái
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-tham-san-nha/"
                    className="tag-cloud-link tag-link-135 tag-link-position-15"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="chống thấm sàn nhà (2 sản phẩm)"
                  >
                    chống thấm sàn nhà
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/chong-tham-san-nha-bang-sl-200/"
                    className="tag-cloud-link tag-link-134 tag-link-position-16"
                    style={{ fontSize: '8pt' }}
                    aria-label="Chống Thấm Sàn Nhà bằng SL-200 (1 sản phẩm)"
                  >
                    Chống Thấm Sàn Nhà bằng SL-200
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/db2015/"
                    className="tag-cloud-link tag-link-98 tag-link-position-17"
                    style={{ fontSize: '8pt' }}
                    aria-label="db2015 (1 sản phẩm)"
                  >
                    db2015
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/hyperstop/"
                    className="tag-cloud-link tag-link-97 tag-link-position-18"
                    style={{ fontSize: '8pt' }}
                    aria-label="hyperstop (1 sản phẩm)"
                  >
                    hyperstop
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/hyperstop-db2015/"
                    className="tag-cloud-link tag-link-96 tag-link-position-19"
                    style={{ fontSize: '8pt' }}
                    aria-label="hyperstop db2015 (1 sản phẩm)"
                  >
                    hyperstop db2015
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-chong-tham-acrylic/"
                    className="tag-cloud-link tag-link-113 tag-link-position-20"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo chống thấm acrylic (1 sản phẩm)"
                  >
                    keo chống thấm acrylic
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-chong-tham-cho-tuong-3b-800/"
                    className="tag-cloud-link tag-link-133 tag-link-position-21"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo chống thấm cho tường 3b-800 (1 sản phẩm)"
                  >
                    Keo chống thấm cho tường 3b-800
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-chong-tham-ho-boi/"
                    className="tag-cloud-link tag-link-131 tag-link-position-22"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo chống thấm hồ Bơi (1 sản phẩm)"
                  >
                    Keo chống thấm hồ Bơi
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-chong-tham-ho-boi-sl200/"
                    className="tag-cloud-link tag-link-128 tag-link-position-23"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo chống thấm hồ Bơi SL200 (1 sản phẩm)"
                  >
                    Keo chống thấm hồ Bơi SL200
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-chong-tham-tron-ximang-3b-100/"
                    className="tag-cloud-link tag-link-138 tag-link-position-24"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo chống thấm trộn ximăng 3B-100 (1 sản phẩm)"
                  >
                    keo chống thấm trộn ximăng 3B-100
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-chong-tham-dan-hoi/"
                    className="tag-cloud-link tag-link-112 tag-link-position-25"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo chống thấm đàn hồi (1 sản phẩm)"
                  >
                    keo chống thấm đàn hồi
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-dan-da/"
                    className="tag-cloud-link tag-link-121 tag-link-position-26"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo dán đá (1 sản phẩm)"
                  >
                    Keo dán đá
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-dan-da-epoxy-resin/"
                    className="tag-cloud-link tag-link-123 tag-link-position-27"
                    style={{ fontSize: '8pt' }}
                    aria-label="Keo dán đá Epoxy Resin (1 sản phẩm)"
                  >
                    Keo dán đá Epoxy Resin
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-dan-da-goc-epoxy/"
                    className="tag-cloud-link tag-link-122 tag-link-position-28"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo dán đá gốc epoxy (1 sản phẩm)"
                  >
                    keo dán đá gốc epoxy
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-pu-sl-668/"
                    className="tag-cloud-link tag-link-107 tag-link-position-29"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo pu sl-668 (1 sản phẩm)"
                  >
                    keo pu sl-668
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-pu-sl668/"
                    className="tag-cloud-link tag-link-103 tag-link-position-30"
                    style={{ fontSize: '8pt' }}
                    aria-label="keo pu sl668 (1 sản phẩm)"
                  >
                    keo pu sl668
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/keo-pu-truong-no/"
                    className="tag-cloud-link tag-link-105 tag-link-position-31"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="keo pu trương nở (2 sản phẩm)"
                  >
                    keo pu trương nở
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/kim-bom-keo/"
                    className="tag-cloud-link tag-link-99 tag-link-position-32"
                    style={{ fontSize: '8pt' }}
                    aria-label="kim bơm keo (1 sản phẩm)"
                  >
                    kim bơm keo
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/kim-bom-keo-pu/"
                    className="tag-cloud-link tag-link-100 tag-link-position-33"
                    style={{ fontSize: '8pt' }}
                    aria-label="kim bơm keo pu (1 sản phẩm)"
                  >
                    kim bơm keo pu
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/luoi-thuy-tinh/"
                    className="tag-cloud-link tag-link-119 tag-link-position-34"
                    style={{ fontSize: '8pt' }}
                    aria-label="lưới thủy tinh (1 sản phẩm)"
                  >
                    lưới thủy tinh
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/luoi-thuy-tinh-chong-nut/"
                    className="tag-cloud-link tag-link-120 tag-link-position-35"
                    style={{ fontSize: '8pt' }}
                    aria-label="lưới thủy tinh chống nứt (1 sản phẩm)"
                  >
                    lưới thủy tinh chống nứt
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/pu-sl-668/"
                    className="tag-cloud-link tag-link-106 tag-link-position-36"
                    style={{ fontSize: '8pt' }}
                    aria-label="pu sl-668 (1 sản phẩm)"
                  >
                    pu sl-668
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/pvc-v15/"
                    className="tag-cloud-link tag-link-126 tag-link-position-37"
                    style={{ fontSize: '8pt' }}
                    aria-label="PVC V15 (1 sản phẩm)"
                  >
                    PVC V15
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/sl-200/"
                    className="tag-cloud-link tag-link-130 tag-link-position-38"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="SL-200 (2 sản phẩm)"
                  >
                    SL-200
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/sl200/"
                    className="tag-cloud-link tag-link-129 tag-link-position-39"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="SL200 (2 sản phẩm)"
                  >
                    SL200
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/sl668/"
                    className="tag-cloud-link tag-link-104 tag-link-position-40"
                    style={{ fontSize: '16.4pt' }}
                    aria-label="sl668 (2 sản phẩm)"
                  >
                    sl668
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/sl800/"
                    className="tag-cloud-link tag-link-111 tag-link-position-41"
                    style={{ fontSize: '8pt' }}
                    aria-label="sl800 (1 sản phẩm)"
                  >
                    sl800
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/thanh-truong-no/"
                    className="tag-cloud-link tag-link-95 tag-link-position-42"
                    style={{ fontSize: '8pt' }}
                    aria-label="thanh trương nở (1 sản phẩm)"
                  >
                    thanh trương nở
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/thanh-truong-no-hyperstop-db2015/"
                    className="tag-cloud-link tag-link-94 tag-link-position-43"
                    style={{ fontSize: '8pt' }}
                    aria-label="Thanh trương nở hyperstop db2015 (1 sản phẩm)"
                  >
                    Thanh trương nở hyperstop db2015
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/waterstop/"
                    className="tag-cloud-link tag-link-127 tag-link-position-44"
                    style={{ fontSize: '8pt' }}
                    aria-label="Waterstop (1 sản phẩm)"
                  >
                    Waterstop
                  </a>
                  <a
                    href="https://nhaankhang.com/tu-khoa/waterstop-pvc-v15/"
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
export default Product;
