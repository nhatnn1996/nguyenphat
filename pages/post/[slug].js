import React, { useEffect } from "react";
import client from "@/api/base/axios-client";
import {
  GET_CATEGORY,
  GET_LIST_POSTS,
  GET_CATEGORY_BY_SLUG,
  GET_POST_BY,
} from "@/api/graphql/queries";
import moment from "moment";
export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_CATEGORY });
  const paths = data.categories.nodes.map((element) => ({
    params: { ...element, slug: element.name },
  }));
  return { paths: paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { data: resultPost } = await client.query({
    query: GET_POST_BY,
    variables: { slug: params.slug },
  });

  const post = resultPost || [];
  return { props: { post } };
}
export default function Home({ post }) {
  const { informationBy } = post || {};
  useEffect(() => {
    if (typeof window !== "undefined") {
      var content = document.getElementById("content-post");
      if (content && informationBy) {
        content.innerHTML = informationBy?.content;
      }
    }
  }, [informationBy]);

  return (
    <div>
      <main id="content">
        <div className="link-page">
          <div className="container">
            <p id="breadcrumbs">
              <span>
                <span>
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/">
                    Home
                  </a>{" "}
                  »{" "}
                  <span className="breadcrumb_last" aria-current="page">
                    {informationBy?.title}
                  </span>
                </span>
              </span>
            </p>{" "}
          </div>
        </div>
        <div className="container">
          <div className="single-inner row">
            <div className="single-left col-md-9">
              <h1 className="single-title">{informationBy?.title}</h1>
              <div className="single-top">
                <div className="fact-check">
                  <a href="" className="flex">
                    <img
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/themes/healthcanal/assets/images/checkmark-circle-3.png"
                      alt=""
                    />
                    <span>Fact Checked</span>
                  </a>
                  <div className="fact-label">
                    <p>
                      All information on this article is checked for the
                      accurracy. Learn more about out process{" "}
                      <a href="#">here</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-author">
                <a href="https://wordpress-749115-2523479.cloudwaysapps.com/author/raymond-s-ramos">
                  <img
                    src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/02/favicon.svg"
                    alt=""
                  />
                </a>
                <p>
                  Updated on{" "}
                  <time
                    className="updated"
                    dateTime="2022-03-24T11:34:13+00:00"
                    itemProp="dateModified"
                  >
                    {moment(informationBy?.date).format("DD/MM/YYYY")}
                  </time>{" "}
                  - Written by{" "}
                  <span
                    itemProp="author"
                    itemType="https://schema.org/Person"
                    itemScope=""
                  >
                    <a
                      href="https://wordpress-749115-2523479.cloudwaysapps.com/author/raymond-s-ramos"
                      title="View all posts by NCVC Staff"
                      rel="author"
                      itemProp="url"
                    >
                      <span className="ncustom" itemProp="name">
                        {informationBy?.author?.node?.name}
                      </span>
                    </a>
                  </span>{" "}
                  <br />
                  <span>Medically reviewed by </span>
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/author/leanh1010">
                    {informationBy?.author?.node?.firstName}
                  </a>{" "}
                </p>{" "}
              </div>
              <div className="pdetail-fimage">
                <img
                  width={750}
                  height={420}
                  src={`https://wordpress-749115-2523479.cloudwaysapps.com/${informationBy?.featuredImage?.node?.uri}`}
                  className="attachment-full size-full wp-post-image"
                  alt={informationBy?.title}
                  loading="lazy"
                />{" "}
              </div>{" "}
              <div className="single-custom sma-list extra-content">
                <p id="content-post"></p>
              </div>
              <div className="sg-aricle">
                <div className="aricle-people">
                  <a href="https://wordpress-749115-2523479.cloudwaysapps.com/author/raymond-s-ramos">
                    <img
                      src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/02/favicon.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="aricle-info">
                  <div className="aricle-top">
                    <div className="aricle-name">
                      <h4>Written by:</h4>
                      <h3>
                        <a href="https://wordpress-749115-2523479.cloudwaysapps.com/author/raymond-s-ramos">
                          {informationBy?.author?.node?.name}
                        </a>
                      </h3>
                    </div>
                    <div className="aricle-other part-pc">
                      <h4>Medically reviewed by:</h4>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/author/leanh1010">
                        {informationBy?.author?.node?.firstName}
                      </a>
                    </div>
                  </div>
                  <div className="aricle-des author-people-social">
                    <p />
                    <div className="aut-share"></div>
                  </div>
                  <div className="aricle-other part-mo">
                    <h4>Medically reviewed by:</h4>
                    <a href="https://wordpress-749115-2523479.cloudwaysapps.com/author/leanh1010">
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-related sma-list">
                <div className="crp_related crp_related_shortcode">
                  <h3>Related Posts:</h3>
                  <ul>
                    <li>
                      <a
                        href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/how-long-does-intermittent-fasting-take-to-work"
                        className="crp_link"
                      >
                        <span className="crp_title">
                          How Long Does Intermittent Fasting Take To Work?
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wordpress-749115-2523479.cloudwaysapps.com/nutrition/what-you-drink-during-intermittent-fasting"
                        className="crp_link"
                      >
                        <span className="crp_title">
                          7 Beverages You Can Drink During Intermittent Fasting
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="crp_clear" />
                </div>
              </div>
            </div>
            <div className="sidebar col-md-3">
              <div className="sidebar-pd-type sma-list">
                <div className="sb-type-it">
                  <h4>Mental Health</h4>
                  <ul>
                    <li>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/betterhelp-reviews/">
                        Betterhelp{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">Online Therapy </a>
                    </li>
                    <li>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/holistic-therapy-near-me/">
                        Holistic Therapy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sb-type-it">
                  <h4>Gundry MD Products</h4>
                  <ul>
                    <li>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/gundry-md-bio-complete-3/">
                        Bio Complete 3
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/gundry-md-energy-renew/">
                        Energy Renew
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/gundry-md-active-advantage/">
                        Active Advantage{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sb-type-it">
                  <h4>Coupons &amp; Deals</h4>
                  <ul>
                    <li>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/coupon/cbdistillery-code/">
                        Cbdistillery Coupon{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://wordpress-749115-2523479.cloudwaysapps.com/coupon/nuleaf-code/">
                        Nuleaf Naturals Coupon{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">Bio Complete 3 Coupon </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="single-link-buttom-bg text-center">
          <div className="toc-list">
            <div className="container">
              <ul />
            </div>
          </div>
          <div className="container toc-action">
            <div className="single-link-buttom flex">
              <div className="single-link-bt-it active">
                <a href="" className="show-toc">
                  Table of Content <i className="fa fa-angle-up" />
                </a>
              </div>
              <div className="single-link-bt-it">
                <a className="toc-current" />
              </div>
              <div className="single-link-bt-it sg-link-bt-2">
                <a href="" className="toc-prev">
                  PREV
                </a>
                <a href="" className="toc-next">
                  NEXT
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
