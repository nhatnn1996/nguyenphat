import React, { useState } from 'react';
import { apollo } from '@/api/index';
import { useMutation, gql } from '@apollo/client';
import { bynewsGQL, newsGQL, newNewsGQL, getNewsbyCategory, postComment } from '@/geters/news';
import { productsNewGQL } from '@/geters/product';
import InfoRight from '@/components/info-right';
import moment from 'moment';
import { timeCache } from '@/service/helper';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const result = await apollo.query({ query: bynewsGQL, variables: { slug: params.slug } });
  const { postBy } = result?.data;
  if (!postBy) return { notfound: true };

  const resultData = await apollo.query({ query: newsGQL, variables: { categoryName: 'Dịch vụ' } });
  const props = {};
  Object.keys(resultData?.data || {}).map((key) => {
    const element = resultData?.data[key];
    props[key] = element?.nodes || [];
  });

  const newProducts = await apollo.query({ query: productsNewGQL });
  const newProds = newProducts?.data?.products?.edges;

  const newNews = await apollo.query({ query: newNewsGQL });
  const newNewsData = newNews?.data?.posts?.nodes;
  return { props: { props, postBy, newProds, newNewsData }, revalidate: timeCache };
}
export async function getStaticPaths() {
  const { data } = await apollo.query({ query: getNewsbyCategory, variables: { slug: 'dich-vu' } });
  const paths = data.category?.posts?.nodes.map((element) => ({
    params: { ...element, slug: element.slug }
  }));
  return {
    paths: paths,
    fallback: true
  };
}
const NewsDetail = ({ props, postBy, newProds, newNewsData }) => {
  const router = useRouter();
  const { slug } = router.query;
  const posts = props?.posts;
  var arrPosts = posts ? [...posts] : [];
  arrPosts = arrPosts.slice(0, 10).filter((item) => item.slug !== slug);
  const [valueComment, setValueComment] = useState({
    comment: '',
    name: '',
    email: '',
    website: ''
  });
  if (!postBy || router.isFallback) return null;
  const data = postBy;
  const dataComment = postBy?.comments?.nodes;
  const [callPostComment] = useMutation(postComment, {
    variables: {
      commentOn: data.databaseId,
      content: valueComment.comment,
      author: valueComment.name,
      authorEmail: valueComment.email,
      authorUrl: valueComment.website,
      date: Date.now().toString()
    }
  });
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const submitComment = () => {
    if (valueComment.comment && valueComment.email && valueComment.name) {
      if (validateEmail(valueComment.email)) {
        callPostComment();
        alert('Gửi bình luận thành công, vui lòng chờ admin duyệt.');
        document.getElementById('commentform').reset();
        setValueComment({});
      } else {
        alert('Email không đúng định dạng, vui lòng nhập lại.');
      }
    }
  };
  const getValueComment = (e, type) => {
    setValueComment({
      ...valueComment,
      [type]: e.target.value
    });
  };
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
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
    );
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="flickity-button flickity-prev-next-button previous"
        type="button"
        aria-label="Previous"
      >
        <svg className="flickity-button-icon" viewBox="0 0 100 100">
          <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" />
        </svg>
      </button>
    );
  }

  var settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
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
                      <a href="https://chongthamnguyenphat.com/chuyen-muc/tin-tuc/" rel="category tag">
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
                                  dangerouslySetInnerHTML={{ __html: data?.content }}
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
                        href="whatsapp://send?text=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p - https://chongthamnguyenphat.com/mau-biet-thu-dep/"
                        data-action="share/whatsapp/share"
                        className="icon button circle is-outline tooltip whatsapp show-for-medium tooltipstered"
                      >
                        <i className="icon-whatsapp" />
                      </a>
                      <a
                        href="//www.facebook.com/sharer.php?u=https://chongthamnguyenphat.com/mau-biet-thu-dep/"
                        data-label="Facebook"
                        onClick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="icon button circle is-outline tooltip facebook tooltipstered"
                      >
                        <i className="icon-facebook" />
                      </a>
                      <a
                        href="//twitter.com/share?url=https://chongthamnguyenphat.com/mau-biet-thu-dep/"
                        onClick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="icon button circle is-outline tooltip twitter tooltipstered"
                      >
                        <i className="icon-twitter" />
                      </a>
                      <a
                        href="mailto:enteryour@addresshere.com?subject=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p&body=Check%20this%20out:%20https://chongthamnguyenphat.com/mau-biet-thu-dep/"
                        rel="nofollow"
                        className="icon button circle is-outline tooltip email tooltipstered"
                      >
                        <i className="icon-envelop" />
                      </a>
                      <a
                        href="//pinterest.com/pin/create/button/?url=https://chongthamnguyenphat.com/mau-biet-thu-dep/&media=&description=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p"
                        onClick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="icon button circle is-outline tooltip pinterest tooltipstered"
                      >
                        <i className="icon-pinterest" />
                      </a>
                      <a
                        href="//www.linkedin.com/shareArticle?mini=true&url=https://chongthamnguyenphat.com/mau-biet-thu-dep/&title=M%E1%BA%A9u%20Bi%E1%BB%87t%20Th%E1%BB%B1%20%C4%90%E1%BA%B9p"
                        onClick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
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
              <ol className="comment-list">
                {dataComment.map((item) => (
                  <li className="comment even thread-even depth-1" id="li-comment-388">
                    <article id="comment-388" className="comment-inner">
                      <div className="flex-row align-top">
                        <div className="flex-col">
                          <div className="comment-author mr-half">
                            <img
                              alt=""
                              src="https://secure.gravatar.com/avatar/f5d9611e0c8533dfbca3e165476ea437?s=70&d=mm&r=g"
                              data-src="https://secure.gravatar.com/avatar/f5d9611e0c8533dfbca3e165476ea437?s=70&d=mm&r=g"
                              srcSet="https://secure.gravatar.com/avatar/f5d9611e0c8533dfbca3e165476ea437?s=140&d=mm&r=g 2x"
                              data-srcset="https://secure.gravatar.com/avatar/f5d9611e0c8533dfbca3e165476ea437?s=140&d=mm&r=g 2x"
                              className="avatar avatar-70 photo lazy-load-active"
                              height={70}
                              width={70}
                              loading="lazy"
                            />{' '}
                          </div>
                        </div>
                        <div className="flex-col flex-grow">
                          <cite className="strong fn">{item.author?.node?.name}</cite>{' '}
                          <span className="says">says:</span>
                          <div className="comment-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                          {item?.author?.node?.email && (
                            <div className="comment-content">
                              <a href={`mailto:${item?.author?.node?.email}`}>{item?.author?.node?.email}</a>
                            </div>
                          )}
                          {item?.author?.node?.url && (
                            <div className="comment-content">
                              <a href={item?.author?.node?.url}>{item?.author?.node?.url}</a>
                            </div>
                          )}
                          <div className="comment-meta commentmetadata uppercase is-xsmall clear">
                            <time dateTime={moment(item.date).format('DD/MM/YYYY, h:mm:ss a')} className="pull-left">
                              {moment(item.date).format('DD/MM/YYYY, h:mm:ss a')}
                            </time>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* .children */}
                  </li>
                ))}
              </ol>
              <div className="section-content relative">
                <div className="row" id="row-1749262871">
                  <div id="col-1302321468" className="col small-12 large-12">
                    <div className="col-inner">
                      <p style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '120%' }}>
                          <strong>
                            <span style={{ color: '#000000' }}>Dịch vụ liên quan:</span>
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
                            style={{
                              left: '0px',
                              // transform: 'translateX(-120%)',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <Slider {...settings}>
                              {arrPosts?.map((item) => (
                                <div
                                  className="col is-selected"
                                  key={item.slug}
                                  aria-selected="true"
                                  style={{ minWidth: '248px' }}
                                >
                                  <div className="col-inner">
                                    <div className="badge-container absolute left top z-1"></div>
                                    <div className="product-small box has-hover box-normal box-text-bottom">
                                      <div className="box-image">
                                        <div className="image-cover" style={{ paddingTop: '100%' }}>
                                          <Link href={`/dich-vu/${item.slug}`}>
                                            <img
                                              width={300}
                                              height={300}
                                              src={item.featuredImage?.node?.sourceUrl}
                                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                              alt=""
                                              loading="lazy"
                                              srcSet={item.featuredImage?.node?.srcSet}
                                              sizes="(max-width: 300px) 100vw, 300px"
                                            />
                                          </Link>
                                        </div>
                                        <div className="image-tools top right show-on-hover"></div>
                                        <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                                      </div>
                                      <div className="box-text text-center">
                                        <div className="title-wrapper">
                                          <p className="name product-title woocommerce-loop-product__title">
                                            <Link href={`/dich-vu/${item.slug}`}>{item.title}</Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div id="respond" className="comment-respond">
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
                <form id="commentform" className="comment-form" noValidate>
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
                      onInput={(e) => getValueComment(e, 'comment')}
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
                      size={30}
                      maxLength={245}
                      required="required"
                      onInput={(e) => getValueComment(e, 'name')}
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
                      size={30}
                      maxLength={100}
                      aria-describedby="email-notes"
                      required="required"
                      onInput={(e) => getValueComment(e, 'email')}
                    />
                  </p>
                  <p className="comment-form-url">
                    <label htmlFor="url">Trang web</label>{' '}
                    <input
                      id="url"
                      name="url"
                      type="url"
                      size={30}
                      maxLength={200}
                      onInput={(e) => getValueComment(e, 'website')}
                    />
                  </p>
                  <p className="form-submit">
                    <input
                      style={{ background: '#0082c8', color: 'white' }}
                      name="submit"
                      type="button"
                      id="submit"
                      className="submit"
                      defaultValue="Phản hồi"
                      onClick={submitComment}
                    />{' '}
                    <input type="hidden" name="comment_post_ID" defaultValue={3617} id="comment_post_ID" />
                    <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                  </p>
                </form>
              </div> */}
            </div>
          </div>

          <InfoRight newProds={newProds} newNewsData={newNewsData} />
        </div>
      </div>
    </div>
  );
};
export default NewsDetail;
