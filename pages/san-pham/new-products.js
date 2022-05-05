import { apollo } from '@/api/index';
import React, { useEffect, useState } from 'react';
import { productDetailGQL, productGQL, productsNewGQL } from '@/geters/product';
import Link from 'next/link';
import Slider from 'react-slick';

export async function getStaticPaths() {
  const { data } = await apollo.query({ query: productGQL });
  const paths = data?.products?.nodes?.map((element) => ({
    params: { slug: element.slug }
  }));
  return {
    paths: paths,
    fallback: true
  };
}
export async function getStaticProps({ params }) {
  const result = await apollo.query({ query: productDetailGQL, variables: { slug: params.slug } });
  const newProducts = await apollo.query({ query: productsNewGQL });
  const newProds = newProducts?.data?.products?.edges;
  return { props: { newProds }, revalidate: 10 * 60 * 1000 };
}

const ProductDetail = ({ newProds }) => {
  return (
    <div>
      {isZoom && (
        <>
          <div className="zoom-popup">
            <img src={imageZoom}></img>
          </div>
          <p onClick={() => setZoomProduct(false)} className="close-zoom">
            {' '}
          </p>
        </>
      )}
      <div className="shop-container">
        <div className="container">
          <div className="woocommerce-notices-wrapper" />
        </div>
        <div
          id="product-3697"
          className="product type-product post-3697 status-publish first instock product_cat-xu-ly-ro-ri-nuoc product_cat-sp-chong-tham-test product_tag-chong-tham-san-mai product_tag-chong-tham-san-thuong product_tag-keo-chong-tham-lo-thien product_tag-pu-goc-nuoc product_tag-pu-he-nuoc has-post-thumbnail shipping-taxable product-type-simple"
        >
          <div className="custom-product-page">
            <div className="row row-small row2" id="row-191126424">
              <div id="col-1852040723" className="col medium-4 small-12 large-4">
                <div className="col-inner" style={{ backgroundColor: 'rgb(251, 240, 240)' }}>
                  <p>
                    <span style={{ color: '#000000', fontSize: '130%' }}>
                      <strong>Sản phẩm mới</strong>
                    </span>
                  </p>
                  <ul className="product_list_widget">
                    {newProds?.map((item) => (
                      <Link href={`/san-pham/${item.node.slug}`} title={item.node.name}>
                        <li>
                          <div>
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
                          </div>

                          <span className="rrp-price">Giá cũ: </span>
                          <span className="amount">Giá: Liên hệ</span>
                        </li>
                      </Link>
                    ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
