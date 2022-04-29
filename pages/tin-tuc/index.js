import React, { useEffect } from 'react';
import Link from 'next/link';
import { apollo } from '@/api/index';
import { newsGQL } from '@/geters/news';
import moment from 'moment';
import InfoRight from '@/components/info-right';
export async function getStaticProps() {
  const result = await apollo.query({ query: newsGQL });
  const props = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    props[key] = element?.nodes || [];
  });
  const { posts } = props;
  return { props: { posts }, revalidate: 10 * 60 * 1000 };
}

const News = (props) => {
  const { posts } = props;
  return (
    <div id="content" className="blog-wrapper blog-archive page-wrapper">
      <div className="row row-large ">
        <div className="large-9 col">
          <div
            id="row-1938324069"
            className="row large-columns-3 medium-columns- small-columns-1 row-masonry"
            data-packery-options='{"itemSelector": ".col", "gutter": 0, "presentageWidth" : true}'
            style={{ position: 'relative', height: '2397.84px' }}
          >
            {posts.map((item) => {
              return (
                <div className="col post-item">
                  <div className="col-inner">
                    <Link href={`/tin-tuc/${item.slug}`} className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          {item.featuredImage?.node?.sourceUrl && (
                            <div className="image-cover" style={{ paddingTop: '56%' }}>
                              <img
                                width={221}
                                height={300}
                                src={item.featuredImage?.node?.sourceUrl}
                                // data-src={item.sourceUrl}
                                className="attachment-medium size-medium wp-post-image lazy-load-active"
                                alt={item.title}
                                loading="lazy"
                                srcSet={item.featuredImage?.node?.srcSet}
                                // data-srcset={item.sourceUrl}
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
                            <p className="from_the_blog_excerpt">{item.content}</p>
                            <p className="from_the_blog_comments uppercase is-xsmall">4 Comments </p>
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
        <InfoRight />
      </div>
    </div>
  );
};
export default News;