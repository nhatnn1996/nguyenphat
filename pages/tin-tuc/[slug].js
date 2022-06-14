import React, { useState } from 'react';
import { apollo } from '@/api/index';
import { useMutation, gql } from '@apollo/client';
import { bynewsGQL, newsGQL, newNewsGQL, getNewsbyCategory, postComment } from '@/geters/news';
import { productsNewGQL } from '@/geters/product';
import InfoRight from '@/components/info-right';
import moment from 'moment';
import {timeCache} from "@/service/helper"

export async function getStaticProps({ params }) {
  const result = await apollo.query({ query: bynewsGQL, variables: { slug: params.slug } });
  const { postBy } = result?.data;
  if (!postBy) return { notfound: true };

  const newProducts = await apollo.query({ query: productsNewGQL });
  const newProds = newProducts?.data?.products?.edges;

  const newNews = await apollo.query({ query: newNewsGQL });
  const newNewsData = newNews?.data?.posts?.nodes;
  return { props: { postBy, newProds, newNewsData }, revalidate: timeCache };
}
export async function getStaticPaths() {
  const { data } = await apollo.query({ query: getNewsbyCategory, variables: { slug: 'tin-tuc' } });
  const paths = data.category?.posts?.nodes.map((element) => ({
    params: { ...element, slug: element.slug }
  }));
  return {
    paths: paths,
    fallback: true
  };
}
const NewsDetail = ({ postBy, newProds, newNewsData }) => {
  const [valueComment, setValueComment] = useState({
    comment: '',
    name: '',
    email: '',
    website: ''
  });
  if (!postBy) return null;
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
          </div>

          <InfoRight newProds={newProds} newNewsData={newNewsData} />
        </div>
      </div>
    </div>
  );
};
export default NewsDetail;
