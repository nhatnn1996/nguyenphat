import React, { useEffect } from 'react';
import { apollo } from '@/api/index';
import { bynewsGQL, newNewsGQL, getNewsbyCategory } from '@/geters/news';
import { productsNewGQL } from '@/geters/product';
import InfoRight from '@/components/info-right';

export async function getStaticPaths() {
  const { data } = await apollo.query({ query: getNewsbyCategory, variables: { slug: 'du-an' } });

  const paths = data.category?.posts?.nodes.map((element) => ({
    params: { ...element, slug: element.slug }
  }));
  return {
    paths: paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const result = await apollo.query({ query: bynewsGQL, variables: { slug: params.slug } });
  const { postBy } = result?.data;
  if (!postBy) return { notfound: true };

  const newProducts = await apollo.query({ query: productsNewGQL });
  const newProds = newProducts?.data?.products?.edges;

  const newNews = await apollo.query({ query: newNewsGQL });
  const newNewsData = newNews?.data?.posts?.nodes;
  return { props: { postBy, newProds, newNewsData }, revalidate: 10 * 60 * 1000 };
}
const NewsDetail = ({ postBy, newProds, newNewsData }) => {
  if(!postBy) return null
  const data = postBy;
  return (
    <div>
      <div id="content" className="blog-wrapper blog-single page-wrapper">
        <div className="row row-large ">
          <div className="large-9 col">
            <article
              id="post-3617"
              className="post-3617 post type-post status-publish format-standard hentry category-tin-tuc"
            >
              <div className="article-inner ">
                <header className="entry-header">
                  <div className="entry-header-text entry-header-text-top text-left">
                    <h6 className="entry-category is-xsmall">
                      <a href="https://nhaankhang.com/chuyen-muc/tin-tuc/" rel="category tag">
                        Tin tức
                      </a>
                    </h6>
                    <h1 className="entry-title">{data?.title}</h1>
                    <div className="entry-divider is-divider small" />
                  </div>
                </header>
                <div className="entry-content single-page">
                  <p></p>
                  <div id="wrapper">
                    <main id="main">
                      <p />
                      <div id="content" className="blog-wrapper blog-single page-wrapper">
                        <div className="row row-large row-divided ">
                          <div className="large-9 col">
                            <article
                              id="post-1492"
                              className="post-1492 post type-post status-publish format-standard hentry category-khong-phan-loai"
                            >
                              <div className="article-inner ">
                                <div
                                  className="entry-content single-page"
                                  id="entry-content"
                                  dangerouslySetInnerHTML={{ __html: data.content }}
                                ></div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      <p />
                    </main>
                  </div>
                  <div className="blog-share text-center">
                    <div className="is-divider medium" />
                    <div className="social-icons share-icons share-row relative">
                      <a
                        href="whatsapp://send?text=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p - https://nhaankhang.com/mau-biet-thu-dep/"
                        data-action="share/whatsapp/share"
                        className="icon button circle is-outline tooltip whatsapp show-for-medium tooltipstered"
                      >
                        <i className="icon-whatsapp" />
                      </a>
                      <a
                        href="//www.facebook.com/sharer.php?u=https://nhaankhang.com/mau-biet-thu-dep/"
                        data-label="Facebook"
                        onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="icon button circle is-outline tooltip facebook tooltipstered"
                      >
                        <i className="icon-facebook" />
                      </a>
                      <a
                        href="//twitter.com/share?url=https://nhaankhang.com/mau-biet-thu-dep/"
                        onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="icon button circle is-outline tooltip twitter tooltipstered"
                      >
                        <i className="icon-twitter" />
                      </a>
                      <a
                        href="mailto:enteryour@addresshere.com?subject=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p&body=Check%20this%20out:%20https://nhaankhang.com/mau-biet-thu-dep/"
                        rel="nofollow"
                        className="icon button circle is-outline tooltip email tooltipstered"
                      >
                        <i className="icon-envelop" />
                      </a>
                      <a
                        href="//pinterest.com/pin/create/button/?url=https://nhaankhang.com/mau-biet-thu-dep/&media=&description=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p"
                        onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="icon button circle is-outline tooltip pinterest tooltipstered"
                      >
                        <i className="icon-pinterest" />
                      </a>
                      <a
                        href="//www.linkedin.com/shareArticle?mini=true&url=https://nhaankhang.com/mau-biet-thu-dep/&title=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p"
                        onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="icon button circle is-outline tooltip linkedin tooltipstered"
                      >
                        <i className="icon-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div id="comments" className="comments-area">
              <div id="respond" className="comment-respond">
                <h3 id="reply-title" className="comment-reply-title">
                  Trả lời{' '}
                  <small>
                    <a
                      rel="nofollow"
                      id="cancel-comment-reply-link"
                      href="/mau-biet-thu-dep/#respond"
                      style={{ display: 'none' }}
                    >
                      Hủy
                    </a>
                  </small>
                </h3>
                <form
                  action="https://nhaankhang.com/wp-comments-post.php"
                  method="post"
                  id="commentform"
                  className="comment-form"
                  noValidate
                >
                  <p className="comment-notes">
                    <span id="email-notes">Email của bạn sẽ không được hiển thị công khai.</span> Các trường bắt buộc
                    được đánh dấu <span className="required">*</span>
                  </p>
                  <p className="comment-form-comment">
                    <label htmlFor="comment">Bình luận</label>{' '}
                    <textarea
                      id="comment"
                      name="comment"
                      cols={45}
                      rows={8}
                      maxLength={65525}
                      required="required"
                      defaultValue={''}
                    />
                  </p>
                  <p className="comment-form-author">
                    <label htmlFor="author">
                      Tên <span className="required">*</span>
                    </label>{' '}
                    <input
                      id="author"
                      name="author"
                      type="text"
                      defaultValue
                      size={30}
                      maxLength={245}
                      required="required"
                    />
                  </p>
                  <p className="comment-form-email">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>{' '}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue
                      size={30}
                      maxLength={100}
                      aria-describedby="email-notes"
                      required="required"
                    />
                  </p>
                  <p className="comment-form-url">
                    <label htmlFor="url">Trang web</label>{' '}
                    <input id="url" name="url" type="url" defaultValue size={30} maxLength={200} />
                  </p>
                  <p className="comment-form-cookies-consent">
                    <input
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      type="checkbox"
                      defaultValue="yes"
                    />{' '}
                    <label htmlFor="wp-comment-cookies-consent">
                      Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.
                    </label>
                  </p>
                  <p className="form-submit">
                    <input name="submit" type="submit" id="submit" className="submit" defaultValue="Phản hồi" />{' '}
                    <input type="hidden" name="comment_post_ID" defaultValue={3617} id="comment_post_ID" />
                    <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                  </p>
                </form>{' '}
              </div>
            </div>
          </div>
          <InfoRight newProds={newProds} newNewsData={newNewsData} />
        </div>
      </div>
    </div>
  );
};
export default NewsDetail;
