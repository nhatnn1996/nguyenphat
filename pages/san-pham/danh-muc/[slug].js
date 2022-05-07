import React, { useState } from 'react';
import { apollo } from '@/api/index';
import { allCategories, categoriesGQL, PaginationGQL } from '@/geters/categories-page';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CategoryComp } from '@/components/partials';

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 }
};

export async function getStaticPaths() {
  const { data } = await apollo.query({ query: allCategories });
  const paths = data?.productCategories?.nodes?.map((element) => ({
    params: { slug: element.slug }
  }));
  return {
    paths: paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const result = await apollo.query({ query: categoriesGQL, variables: { slug: params.slug } });
  const data = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    data[key] = element;
  });
  data.slug = params.slug;
  if (!data.productCategory) return { notfound: true };

  return { props: data, revalidate: 10 * 60 * 1000 };
}
const Product = ({ productCategories, productCategory, slug }) => {
  if (!productCategory) return null;
  const [data, setData] = useState(productCategory.products);
  const [loading, setLoading] = useState(false);
  const { nodes, pageInfo } = data;

  const updateProduct = async () => {
    const newProducts = await apollo.query({
      query: PaginationGQL,
      variables: { after: data.pageInfo.endCursor, slug }
    });
    const contentProducts = newProducts.data.productCategory?.products;
    setData({ nodes: [...data.nodes, ...contentProducts.nodes], pageInfo: contentProducts.pageInfo });
    setLoading(false);
  };
  const loadMore = async () => {
    setLoading(true);
    queueMicrotask(updateProduct);
  };

  return (
    <div className="mt-3">
      <div className="shop-page-title category-page-title page-title snipcss-HrhkE container">
        <div className="is-small flex mt-2" style={{ marginTop: '20px' }}>
          <nav className="woocommerce-breadcrumb breadcrumbs uppercase snip-nav">
            <a href="https://nhaankhang.com" className="snip-a">
              Trang chủ
            </a>
            <span className="divider">/</span>
            Sản phẩm
          </nav>
          <CategoryComp data={productCategories.nodes} />
        </div>
        <div className="row category-page-row">
          <div className="col large-12">
            <div className="shop-container">
              <div className="woocommerce-notices-wrapper" />
              <div className="products row row-small large-columns-4 medium-columns-3 small-columns-2 has-equal-box-heights">
                {nodes.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={variants} // Pass the variant object into Framer Motion
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ type: 'ease-in-out', duration: 0.3 }} // Set the transition to linear
                    className="cursor-pointer product-small col has-hover product type-product post-3697 status-publish first instock product_cat-xu-ly-ro-ri-nuoc product_cat-sp-chong-tham-test product_tag-chong-tham-san-mai product_tag-chong-tham-san-thuong product_tag-keo-chong-tham-lo-thien product_tag-pu-goc-nuoc product_tag-pu-he-nuoc has-post-thumbnail shipping-taxable product-type-simple"
                  >
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box">
                        <div className="box-image">
                          <div className="image-none">
                            <Link href={`/san-pham/${item.slug}`}>
                              <img
                                width={300}
                                height={300}
                                src={item?.image?.sourceUrl}
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
                  </motion.div>
                ))}
              </div>
              {pageInfo.hasNextPage && (
                <div className="mt-5 text-center">
                  {loading && (
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  )}
                  {!loading && (
                    <button onClick={loadMore} className="shadow rounded">
                      Xem thêm sản phẩm
                    </button>
                  )}
                </div>
              )}

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
        </div>
      </div>
    </div>
  );
};
export default Product;
