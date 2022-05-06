import React from 'react';
import Link from 'next/link';
import { apollo } from '@/api/index';
import { newsGQL, newNewsGQL } from '@/geters/news';
import moment from 'moment';
import InfoRight from '@/components/info-right';
import { productsNewGQL } from '@/geters/product';
export async function getStaticProps() {
  const result = await apollo.query({ query: newsGQL, variables: { categoryName: 'Dự án' } });
  const props = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    props[key] = element?.nodes || [];
  });
  const { posts } = props;
  const newProducts = await apollo.query({ query: productsNewGQL });
  const newProds = newProducts?.data?.products?.edges;

  const newNews = await apollo.query({ query: newNewsGQL });
  const newNewsData = newNews?.data?.posts?.nodes;

  return { props: { posts, newProds, newNewsData }, revalidate: 10 * 60 * 1000 };
}

const News = ({ posts, newProds, newNewsData }) => {
  const returnInnerHtml = (html, slug) => {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const sortDescription = document.getElementById(`from_the_blog_excerpt-${slug}`);
        if (sortDescription) {
          sortDescription.innerHTML = html.slice(0, 200) + ' [...]';
        }
      }
    }, 0);
  };
  return (
    <div id="content" className="blog-wrapper blog-archive page-wrapper">
      <div className="row row-large ">
        <div className="large-9 col">
          <div
            id="row-1938324069"
            className="row large-columns-3 medium-columns- small-columns-1 row-masonry"
            data-packery-options='{"itemSelector": ".col", "gutter": 0, "presentageWidth" : true}'
            style={{ position: 'relative', display: 'flex' }}
          >
            {posts.map((item) => {
              return (
                <div className="col post-item post-item-news">
                  <div className="col-inner col-inner-news">
                    <Link href={`/du-an/${item.slug}`} className="plain">
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
                            <p>{moment(item.date).format('DD/MM/YYYY')}</p>
                            <div className="is-divider" />
                            <p className="from_the_blog_excerpt" id={`from_the_blog_excerpt-${item.slug}`}>
                              {returnInnerHtml(item.content, item.slug)}
                            </p>
                            {/* <p className="from_the_blog_comments uppercase is-xsmall">4 Comments </p> */}
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
            })}
          </div>
        </div>
        <InfoRight newProds={newProds} newNewsData={newNewsData} />
      </div>
    </div>
  );
};
export default News;
