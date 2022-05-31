import { apollo } from '@/api/index';
import React, { useState } from 'react';
import { searchProductGQL, productGQL } from '@/geters/product';
import { searchNewsGQL } from '@/geters/news';
import { motion } from 'framer-motion';
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { q } = context.params;

  const products = await apollo.query({
    query: searchProductGQL,
    variables: { search: q }
  });
  const news = await apollo.query({
    query: searchNewsGQL,
    variables: { search: q }
  });
  const newSearch = news?.data?.posts;
  const productSearch = products?.data?.products;
  return {
    props: { productSearch, newSearch, q }
  };
}

const ProductDetail = ({ productSearch, newSearch, q }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNews, setLoadingNews] = useState(false);

  const [data, setData] = useState(productSearch);
  const [dataNews, setDataNews] = useState(newSearch);
  const { nodes, pageInfo } = data;

  const variants = {
    hidden: { opacity: 0, x: 0, y: -10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 }
  };
  const updateProduct = async () => {
    const newProducts = await apollo.query({
      query: productGQL,
      variables: { search: q, after: pageInfo.endCursor }
    });
    const contentProducts = newProducts.data.products;
    console.log(contentProducts,'contentProducts');
    setData({ nodes: [...nodes, ...contentProducts.nodes], pageInfo: contentProducts.pageInfo });
    setLoading(false);
  };
  const updateNews = async () => {
    const news = await apollo.query({
      query: searchNewsGQL,
      variables: { search: q, after: dataNews.pageInfo.endCursor }
    });
    const contentNews = news.data.posts;
    setDataNews({ nodes: [...dataNews.nodes, ...contentNews.nodes], pageInfo: contentNews.pageInfo });
    setLoadingNews(false);
  };
  const loadMore = async () => {
    setLoading(true);
    updateProduct();
  };
  const loadMoreNews = async () => {
    setLoadingNews(true);
    updateNews();
  };
  const returnInnerHtml = (html, slug) => {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const sortDescription = document.getElementById(`from_the_blog_excerpt-${slug}`);
        if (sortDescription && html) {
          sortDescription.innerHTML = html.slice(0, 200) + ' [...]';
        }
      }
    }, 0);
  };
  return (
    <div className="mt-3">
      <div className="shop-page-title category-page-title page-title snipcss-HrhkE container">
        <div className="mt-2 my-15" style={{ marginTop: '20px', fontSize: "17px" }}>
          <span>Tìm kiếm với từ khoá </span>
          <span className="font-bold">{q}</span>
        </div>
        <div className="page-title-inner flex-row  medium-flex-wrap ">
          <div className="flex-col flex-grow medium-text-center">
            <span className="font-bold my-15">Sản phẩm</span>
          </div>
        </div>
        <div className="row category-page-row" style={{ margin: 'unset' }}>
          <div className="col large-12">
            <div className="shop-container">
              <div className="woocommerce-notices-wrapper" />
              <div className="products row large-columns-4 medium-columns-3 small-columns-2 has-equal-box-heights">
                {nodes.length > 0 ? (
                  nodes.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={variants}
                      initial="hidden"
                      animate="enter"
                      exit="exit"
                      transition={{ type: 'ease-in-out', duration: 0.3 }}
                      className="product-small col has-hover product type-product post-3697 status-publish first instock product_cat-xu-ly-ro-ri-nuoc product_cat-sp-chong-tham-test product_tag-chong-tham-san-mai product_tag-chong-tham-san-thuong product_tag-keo-chong-tham-lo-thien product_tag-pu-goc-nuoc product_tag-pu-he-nuoc has-post-thumbnail shipping-taxable product-type-simple"
                    >
                      <div className="col-inner" style={{ cursor: 'poiter' }}>
                        <div className="badge-container absolute left top z-1"></div>
                        <div className="product-small box">
                          <div className="box-image">
                            <div className="image-none">
                              <Link href={`/san-pham/${item.slug}`}>
                                <img
                                  width={300}
                                  height={300}
                                  src={item?.image?.sourceUrl}
                                  data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png"
                                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                  alt={item?.image?.title}
                                  loading="lazy"
                                  srcSet={item?.image?.srcSet}
                                  data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w"
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <span>Không có sản phẩm nào</span>
                )}
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
                    <button onClick={loadMore} className="shadow rounded loadmore-button">
                      Xem thêm sản phẩm
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="page-title-inner flex-row  medium-flex-wrap mb-20">
          <div className="flex-col flex-grow medium-text-center">
            <span className="font-bold my-15">Tin tức</span>
          </div>
        </div>
        <div
          id="row-1938324069"
          className="row large-columns-3 medium-columns- small-columns-1 row-masonry"
          data-packery-options='{"itemSelector": ".col", "gutter": 0, "presentageWidth" : true}'
          style={{ position: 'relative', display: 'flex', marginLeft: 'unset', marginBottom: '20px' }}
        >
          {dataNews?.nodes?.length > 0 ? (
            dataNews?.nodes?.map((item) => {
              return (
                <div className="col post-item post-item-news" key={item.slug}>
                  <div className="col-inner col-inner-news">
                    <Link href={`/tin-tuc/${item.slug}`} className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          {item.featuredImage?.node?.sourceUrl && (
                            <div className="image-cover" style={{ paddingTop: '56%' }}>
                              <img
                                width={221}
                                height={300}
                                src={item.featuredImage?.node?.sourceUrl}
                                className="attachment-medium size-medium wp-post-image lazy-load-active"
                                alt={item.title}
                                loading="lazy"
                                srcSet={item.featuredImage?.node?.srcSet}
                                sizes="(max-width: 221px) 100vw, 221px"
                              />
                            </div>
                          )}
                        </div>
                        <div className="box-text text-left">
                          <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large ">{item.title}</h5>
                            {/* <p>{moment(item.date).format('DD/MM/YYYY')}</p> */}
                            <div className="is-divider" />
                            <p className="from_the_blog_excerpt" id={`from_the_blog_excerpt-${item.slug}`}>
                              {returnInnerHtml(item.content, item.slug)}
                            </p>
                          </div>
                        </div>
                        <div className="badge absolute top post-date badge-square">
                          <div className="badge-inner">
                            <span className="post-date-day">22</span>
                            <br />
                            <span className="post-date-month is-xsmall">Th10</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <span>Không có tin tức nào</span>
          )}
        </div>
        {dataNews.pageInfo.hasNextPage && (
          <div className="mt-5 text-center">
            {loadingNews && (
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            )}
            {!loadingNews && (
              <button onClick={loadMoreNews} className="shadow rounded loadmore-button">
                Xem thêm tin tức
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetail;
