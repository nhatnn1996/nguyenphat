import { apollo } from '@/api/index';
import React, { useEffect, useState } from 'react';
import { productDetailGQL, productGQL, productsNewGQL, postReview } from '@/geters/product';
import Link from 'next/link';
import Slider from 'react-slick';
import { useMutation } from '@apollo/client';
import moment from 'moment';
import { timeCache } from '@/service/helper';
import { useRouter } from 'next/router';
import { useInfo } from 'context/info';

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
  const { product } = result?.data;

  if (!product) return { notfound: true };
  const productCategories = product?.productCategories?.nodes[0]?.products;
  const newProducts = await apollo.query({ query: productsNewGQL });

  const newProds = newProducts?.data?.products?.edges;
  return { props: { product, productCategories, newProds }, revalidate: timeCache };
}

const ProductDetail = ({ product, productCategories, newProds }) => {
  if (!product) return null;
  const [isZoom, setZoomProduct] = useState(false);
  const [imageZoom, setImageZoom] = useState(null);
  const [isDisable, setDisable] = useState(true);
  const [rating, setRating] = useState(0);
  const [valueComment, setValueComment] = useState({
    comment: '',
    author: '',
    email: '',
    rating: rating || 0
  });

  const [callPostReview] = useMutation(postReview, {
    variables: {
      commentOn: product.databaseId,
      rating: rating,
      content: valueComment.comment,
      author: valueComment.author,
      authorEmail: valueComment.email,
      date: Date.now().toString()
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sortDescription = document.getElementById('product-short-description');
      const decription = document.getElementById('accordion-inner');
      if (sortDescription && decription) {
        sortDescription.innerHTML = product?.shortDescription;
        decription.innerHTML = product?.description || '<p>Kh??ng c?? m?? t???</p>';
      }
    }
    var coll = document.getElementsByClassName('collapsible-product');
    var tagI = document.getElementsByClassName('icon-angle-down');
    var i;
    for (i = 0; i < coll.length; i++) {
      var contentButton = coll[0].nextElementSibling;
      if (contentButton.style.display === 'block') {
        contentButton.style.display = 'none';
        if (tagI) {
          tagI[0].style.transform = 'rotate(0deg)';
        }
      } else {
        contentButton.style.display = 'block';
        if (tagI) {
          tagI[0].style.transform = 'rotate(180deg)';
        }
      }
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        var tagI = this.getElementsByClassName('icon-angle-down');
        if (content.style.display === 'block') {
          content.style.display = 'none';
          if (tagI) {
            tagI[0].style.transform = 'rotate(0deg)';
          }
        } else {
          content.style.display = 'block';
          if (tagI) {
            tagI[0].style.transform = 'rotate(180deg)';
          }
        }
      });
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        setZoomProduct(false);
      }
    });
  }, []);
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

  const onPreviewProduct = (status) => {
    var index = 0;
    if (status) {
      index = index++;
    } else {
      index = index--;
    }
    // setPreviewProduct(index);
  };
  function NextArrowPreview(props) {
    const { onClick } = props;
    return (
      onClick && (
        <button
          onClick={() => {
            onClick();
            onPreviewProduct(true);
          }}
          className="flickity-button flickity-prev-next-button next"
          type="button"
          aria-label="Next"
        >
          <svg className="flickity-button-icon" viewBox="0 0 100 100">
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow-product"
              transform="translate(100, 100) rotate(180) "
            />
          </svg>
        </button>
      )
    );
  }
  function PrevArrowPreview(props) {
    const { onClick } = props;
    return (
      onClick && (
        <button
          onClick={() => {
            onClick();
            onPreviewProduct(false);
          }}
          className="flickity-button flickity-prev-next-button previous"
          type="button"
          aria-label="Previous"
        >
          <svg className="flickity-button-icon arrow-product" viewBox="0 0 100 100">
            <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" />
          </svg>
        </button>
      )
    );
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const submitComment = () => {
    if (valueComment.comment && valueComment.email && valueComment.author) {
      if (validateEmail(valueComment.email)) {
        callPostReview();
        alert('G???i ????nh gi?? th??nh c??ng, vui l??ng ch??? admin duy???t.');
        document.getElementById('commentform').reset();
        setRating(0);
        setValueComment({});
      } else {
        alert('Email kh??ng ????ng ?????nh d???ng, vui l??ng nh???p l???i.');
      }
    }
  };
  const getValueComment = (e, type) => {
    setValueComment({
      ...valueComment,
      [type]: e.target.value
    });
  };
  const selectRating = (e) => {
    setRating(e);
  };
  const zoomProduct = (img) => {
    setZoomProduct(true);
    setImageZoom(img);
  };
  var settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  var settingsPreview = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowPreview />,
    prevArrow: <PrevArrowPreview />
  };
  useEffect(() => {
    if (valueComment.email !== '' && valueComment.author !== '' && valueComment.comment !== '' && rating !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [valueComment, rating]);
  useEffect(() => {
    magnify('myimage', 2);
  }, []);

  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement('DIV');
    glass.setAttribute('class', `img-magnifier-glass`);
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = img.width * zoom + 'px ' + img.height * zoom + 'px';
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('mousemove', moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener('touchmove', moveMagnifier);
    img.addEventListener('touchmove', moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /*set the position of the magnifier glass:*/
      glass.style.left = x - w + 'px';
      glass.style.top = y - h + 'px';
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  const { infoSetting } = useInfo();
  const router = useRouter();
  let images = product?.galleryImages?.nodes;
  if (images.length === 0) images = [product.image];
  if (router.isFallback) return null;
  return (
    <div>
      {isZoom && (
        <>
          <div className="zoom-popup">
            <img src={imageZoom}></img>
          </div>
          <p onClick={() => setZoomProduct(false)} className="close-zoom">
            &nbsp;
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
            <section className="section chi-tiet-sp" id="section_1929741669">
              <div className="bg section-bg fill bg-fill bg-loaded"></div>
              <div className="section-content relative">
                <div className="row row1" id="row-1561942">
                  <div id="col-139192948" className="col medium-6 small-12 large-6">
                    <div className="col-inner" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                      <div className="product-title-container is-small">
                        <h1 className="product-title product_title entry-title">{product?.name}</h1>
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: '\n#col-139192948 > .col-inner {\n  padding: 10px 10px 0px 10px;\n}\n'
                      }}
                    />
                  </div>
                  <div id="col-170417640" className="col medium-3 small-12 large-3">
                    <div className="col-inner text-right" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                      <div
                        id="gap-981222257"
                        className="gap-element clearfix"
                        style={{ display: 'block', height: 'auto' }}
                      >
                        <style dangerouslySetInnerHTML={{ __html: '\n#gap-981222257 {\n  padding-top: 6px;\n}\n' }} />
                      </div>
                      <div className="product-breadcrumb-container is-smaller">
                        <nav className="woocommerce-breadcrumb breadcrumbs uppercase">
                          <Link href="/san-pham">S???n ph???m</Link> <span className="divider">/</span> {product?.name}
                        </nav>
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: '\n#col-170417640 > .col-inner {\n  padding: 10px 0px 0px 10px;\n}\n'
                      }}
                    />
                  </div>
                  <div id="col-1011885272" className="col cot3 medium-3 small-12 large-3">
                    <div className="col-inner">
                      <a
                        rel="noopener noreferrer"
                        href="tel:+84908485861"
                        target="_blank"
                        className="button primary lowercase expand"
                      >
                        <i className="icon-phone" /> <span>Hotline: {infoSetting?.hotline}</span>
                      </a>
                    </div>
                  </div>
                  <div id="col-1258600591" className="col anh-san-pham medium-4 small-12 large-4">
                    <div className="col-inner">
                      <p></p>
                      <div
                        className="product-images slider-wrapper relative mb-half has-hover woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images "
                        data-columns={4}
                        style={{ opacity: 1 }}
                      >
                        <div className="absolute left right">
                          <div className="container relative">
                            <div className="badge-container is-larger absolute left top z-1"></div>{' '}
                          </div>
                        </div>
                        <figure
                          className="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-circle mb-half slider-style-container slider-nav-light slider-load-first no-overflow is-draggable flickity-enabled slider-lazy-load-active"
                          data-flickity-options='{
				"cellAlign": "center",
				"wrapAround": true,
				"autoPlay": false,
				"prevNextButtons":true,
				"adaptiveHeight": true,
				"imagesLoaded": true,
				"lazyLoad": 1,
				"dragThreshold" : 15,
				"pageDots": false,
				"rightToLeft": false			}'
                          style={{ backgroundColor: '#333' }}
                          tabIndex={0}
                        >
                          <div className="flickity-viewport" style={{ height: '524.133px', touchAction: 'pan-y' }}>
                            <div className="flickity-slider" style={{ display: 'flex', alignItems: 'center' }}>
                              <Slider {...settingsPreview}>
                                {images.map((item, index) => (
                                  <div
                                    key={index}
                                    data-thumb="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                                    className="img-magnifier-container"
                                    style={{ position: 'absolute', left: '0%' }}
                                  >
                                    <img
                                      width={433}
                                      height={577}
                                      src={item?.sourceUrl}
                                      className="lazy-load skip-lazy"
                                      alt={item?.title}
                                      loading="lazy"
                                      id="myimage"
                                      title="z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview"
                                      data-caption={item?.title}
                                      data-large_image_width={433}
                                      data-large_image_height={577}
                                      srcSet={item?.srcSet}
                                    />
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                        </figure>
                        <div className="loading-spin centered dark" style={{ display: 'none' }} />
                        <div className="absolute bottom left right">
                          <div className="container relative image-tools">
                            <div className="image-tools absolute bottom right z-3">
                              <a
                                onClick={() => zoomProduct(product?.image?.sourceUrl)}
                                href="#product-zoom"
                                className="zoom-button button is-outline circle icon tooltip hide-for-small tooltipstered"
                              >
                                <i className="icon-expand" />{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p />
                    </div>
                  </div>
                  <div id="col-160653139" className="col thong-tin-co-ban medium-5 small-12 large-5">
                    <div className="col-inner">
                      <div
                        id="gap-516168239"
                        className="gap-element clearfix"
                        style={{ display: 'block', height: 'auto' }}
                      >
                        <style dangerouslySetInnerHTML={{ __html: '\n#gap-516168239 {\n  padding-top: 14px;\n}\n' }} />
                      </div>
                      <div className="product-short-description" id="product-short-description">
                        <div style={{ width: '480px' }} className="wp-video">
                          <div
                            id="mep_0"
                            className="mejs-container mejs-container-keyboard-inactive wp-video-shortcode mejs-video"
                            tabIndex={0}
                            role="application"
                            aria-label="Tr??nh ch??i Video"
                            style={{ width: '480px', height: '854px', minWidth: '217px' }}
                          >
                            <div className="mejs-inner">
                              <div className="mejs-mediaelement">
                                <mediaelementwrapper id="video-3697-1">
                                  <video
                                    controls
                                    className="wp-video-shortcode"
                                    id="video-3697-1_html5"
                                    width={480}
                                    height={854}
                                    preload="metadata"
                                    src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/8238670221663919663.mp4?_=1"
                                    style={{ width: '480px', height: '854px' }}
                                  >
                                    {/* <source type="video/mp4" src={product.shortDescription.replace()} /> */}
                                    <a href="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/8238670221663919663.mp4">
                                      https://chongthamnguyenphat.com/wp-content/uploads/2022/03/8238670221663919663.mp4
                                    </a>
                                  </video>
                                </mediaelementwrapper>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-price-container is-larger">
                        <div className="price-wrapper">
                          <p className="price product-page-price ">
                            <span className="rrp-price">Gi?? c??: </span>
                            <span className="amount">Gi??: Li??n h???</span>
                          </p>
                        </div>
                      </div>
                      <div className="add-to-cart-container form-normal is-normal" />
                    </div>
                  </div>
                  <div id="col-1854681923" className="contact-product col medium-3 small-12 large-3">
                    <div className="col-inner contact-product-col">
                      <h3>?????a ch??? mua h??ng:</h3>
                      <div className="icon-box featured-box icon-box-left text-left">
                        {/* <div className="icon-box-img" style={{ width: '31px' }}>
                          <div className="icon">
                            <div className="icon-inner">
                              <img
                                width={100}
                                height={100}
                                src="https://chongthamnguyenphat.com/wp-content/uploads/2018/03/map.png"
                                className="attachment-medium size-medium"
                                alt=""
                                loading="lazy"
                              />{' '}
                            </div>
                          </div>
                        </div> */}
                        <div className="icon-box-text last-reset">
                          {/* <span style={{ fontSize: '105%', color: '#000000' }}>
                            ?????a ch??? mua h??ng
                            <br />
                          </span> */}
                          <span style={{ fontWeight: 'bold' }}>?????a ch???: </span>
                          <span>{infoSetting?.office}</span>
                          <br />
                          <span style={{ fontWeight: 'bold' }}>??i???n tho???i: </span>
                          <span>{infoSetting?.hotline}</span>
                          <br />
                          <span style={{ fontWeight: 'bold' }}>Email: </span>
                          <span>{infoSetting?.email}</span>
                        </div>
                      </div>
                      <div
                        id="gap-485607457"
                        className="gap-element clearfix"
                        style={{ display: 'block', height: 'auto' }}
                      >
                        <style dangerouslySetInnerHTML={{ __html: '\n#gap-485607457 {\n  padding-top: 12px;\n}\n' }} />
                      </div>
                      <a
                        rel="noopener noreferrer"
                        href="https://messenger.com/t/254300248069701/"
                        target="_blank"
                        className="button success lowercase expand"
                        style={{ borderRadius: '4px' }}
                      >
                        <i className="icon-facebook" /> <span>Chat Facebook</span>
                      </a>
                      <div
                        id="gap-1610357282"
                        className="gap-element clearfix"
                        style={{ display: 'block', height: 'auto' }}
                      >
                        <style dangerouslySetInnerHTML={{ __html: '\n#gap-1610357282 {\n  padding-top: 15px;\n}\n' }} />
                      </div>
                      <div className="social-icons follow-icons full-width text-center">
                        <a
                          href="#"
                          target="_blank"
                          data-label="Facebook"
                          rel="noopener noreferrer nofollow"
                          className="icon primary button circle facebook tooltip tooltipstered"
                        >
                          <i className="icon-facebook" />
                        </a>
                        <a
                          href="mailto:#"
                          data-label="E-mail"
                          rel="nofollow"
                          className="icon primary button circle email tooltip tooltipstered"
                        >
                          <i className="icon-envelop" />
                        </a>
                        <a
                          href="tel:#"
                          target="_blank"
                          data-label="Phone"
                          rel="noopener noreferrer nofollow"
                          className="icon primary button circle phone tooltip tooltipstered"
                        >
                          <i className="icon-phone" />
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          data-label="YouTube"
                          className="icon primary button circle youtube tooltip tooltipstered"
                        >
                          <i className="icon-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n#row-1561942 > .col > .col-inner {\n  padding: 10px 0px 10px 0px;\n  background-color: rgb(255, 255, 255);\n}\n'
                    }}
                  />
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n#section_1929741669 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n#section_1929741669 .section-bg.bg-loaded {\n  background-image: url(https://chongthamnguyenphat.com/wp-content/uploads/2018/03/bg-portfolio.jpg);\n}\n'
                }}
              />
            </section>
            <div className="row row-small row2" id="row-191126424">
              <div id="col-1754419614" className="col medium-8 small-12 large-8">
                <div className="col-inner">
                  <div className="product-page-accordian">
                    <button type="button" className="collapsible-product active">
                      <i className="icon-angle-down" />
                      M?? t???
                    </button>
                    <div className="content-collapsible-product">
                      <div id="accordion-inner" className="accordion-inner" style={{ display: 'block' }}></div>
                    </div>
                    <button type="button" className="collapsible-product">
                      <i className="icon-angle-down" />
                      ????nh gi??
                    </button>
                    <div className="content-collapsible-product">
                      <div className="accordion-inner" style={{ display: 'block' }}>
                        <div id="reviews" className="woocommerce-Reviews row">
                          <div id="comments" className="col large-12">
                            <h3 className="woocommerce-Reviews-title normal">????nh gi?? </h3>
                            <ol className="comment-list">
                              {product?.reviews?.edges.map((item) => (
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
                                        <cite className="strong fn">{item?.node?.author?.node?.name}</cite>{' '}
                                        <span className="says">????nh gi?? :</span>
                                        <p className="stars start-review">
                                          {Array.from(Array(item?.rating), (e, i) => {
                                            return (
                                              <span key={i}>
                                                <span>
                                                  <a className="star-1" href="#">
                                                    1
                                                  </a>
                                                </span>
                                              </span>
                                            );
                                          })}
                                        </p>
                                        <div
                                          className="comment-content"
                                          dangerouslySetInnerHTML={{ __html: item?.node?.content }}
                                        ></div>
                                        {item?.node?.author?.node?.email && (
                                          <div className="comment-content">
                                            <a href={`mailto:${item?.node?.author?.node?.email}`}>
                                              {item?.node?.author?.node?.email}
                                            </a>
                                          </div>
                                        )}
                                        <div className="comment-meta commentmetadata uppercase is-xsmall clear">
                                          <time
                                            dateTime={moment(item?.node?.date).format('DD/MM/YYYY, h:mm:ss a')}
                                            className="pull-left"
                                          >
                                            {moment(item?.node?.date).format('DD/MM/YYYY, h:mm:ss a')}
                                          </time>
                                        </div>
                                      </div>
                                    </div>
                                  </article>

                                  {/* .children */}
                                </li>
                              ))}
                            </ol>

                            {/* <p className="woocommerce-noreviews">Ch??a c?? ????nh gi?? n??o.</p> */}
                          </div>
                          <div id="review_form_wrapper" className="large-12 col">
                            <div id="review_form" className="col-inner">
                              <div className="review-form-inner has-border">
                                <div id="respond" className="comment-respond">
                                  <h3 id="reply-title" className="comment-reply-title">
                                    {(product?.reviews?.edges?.length > 0 && <p>Nh???n x??t {product?.name} </p>) || (
                                      <p>H??y l?? ng?????i ?????u ti??n nh???n x??t {product?.name}</p>
                                    )}
                                    <small>
                                      <a
                                        rel="nofollow"
                                        id="cancel-comment-reply-link"
                                        href="/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/#respond"
                                        style={{ display: 'none' }}
                                      >
                                        H???y
                                      </a>
                                    </small>
                                  </h3>
                                  <div className="comment-form-rating">
                                    <label htmlFor="rating">
                                      ????nh gi?? c???a b???n&nbsp;<span className="required">*</span>
                                    </label>
                                    <p className="stars">
                                      <span>
                                        {Array.from(Array(5), (e, i) => (
                                          <a
                                            onClick={() => selectRating(i + 1)}
                                            className={`star-${i + 1} ${rating === i + 1 ? 'star-selected' : ''}`}
                                          >
                                            {i + 1}
                                          </a>
                                        ))}
                                      </span>
                                    </p>
                                  </div>
                                  <form id="commentform" className="comment-form" noValidate>
                                    <p className="comment-form-comment">
                                      <label htmlFor="comment">
                                        Nh???n x??t c???a b???n&nbsp;<span className="required">*</span>
                                      </label>
                                      <textarea
                                        id="comment"
                                        name="comment"
                                        cols={45}
                                        rows={8}
                                        required
                                        onInput={(e) => getValueComment(e, 'comment')}
                                      />
                                    </p>
                                    <p className="comment-form-author">
                                      <label htmlFor="author">
                                        T??n&nbsp;<span className="required">*</span>
                                      </label>
                                      <input
                                        onInput={(e) => getValueComment(e, 'author')}
                                        id="author"
                                        name="author"
                                        type="text"
                                        defaultValue=""
                                        size={30}
                                        required
                                      />
                                    </p>
                                    <p className="comment-form-email">
                                      <label htmlFor="email">
                                        Email&nbsp;<span className="required">*</span>
                                      </label>
                                      <input
                                        onInput={(e) => getValueComment(e, 'email')}
                                        id="email"
                                        name="email"
                                        type="email"
                                        defaultValue=""
                                        size={30}
                                        required
                                      />
                                    </p>

                                    <p className="form-submit">
                                      <input
                                        className={`submit ${!isDisable ? 'visable-button' : 'disable-button'}`}
                                        disabled={isDisable}
                                        type="button"
                                        id="submit"
                                        name="submit"
                                        defaultValue="G???i ??i"
                                        onClick={() => submitComment()}
                                      />{' '}
                                      <input
                                        type="hidden"
                                        name="comment_post_ID"
                                        defaultValue={3697}
                                        id="comment_post_ID"
                                      />
                                      <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                    </p>
                                  </form>
                                </div>
                                {/* #respond */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="collapsible-product">
                      <i className="icon-angle-down" />
                      H?????ng d???n thanh to??n
                    </button>
                    <div className="content-collapsible-product">
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="col-1852040723" className="col medium-4 small-12 large-4">
                <div className="col-inner" style={{ backgroundColor: 'rgba(0, 0, 0,0.1)' }}>
                  <p>
                    <span style={{ color: '#000000', fontSize: '130%' }}>
                      <strong>S???n ph???m m???i</strong>
                    </span>
                  </p>
                  <ul className="product_list_widget">
                    {newProds?.map((item) => (
                      <Link href={`/san-pham/${item.node.slug}`} key={item.node.slug} title={item.node.name}>
                        <li>
                          <div>
                            <img
                              width={100}
                              height={100}
                              src={item.node?.image?.sourceUrl}
                              className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazy-load-active"
                              alt={item.node?.image?.title}
                              loading="lazy"
                              srcSet={item?.node?.image?.srcSet}
                              sizes="(max-width: 100px) 100vw, 100px"
                            />
                            <span className="product-title">{item?.node.name}</span>
                          </div>

                          <span className="rrp-price">Gi?? c??: </span>
                          <span className="amount">Gi??: Li??n h???</span>
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

            <section className="section sp-lien-quan" id="section_1300839607">
              <div className="bg section-bg fill bg-fill bg-loaded">
                <div className="is-border" style={{ borderWidth: '1 0px 0px 0px' }}></div>
              </div>
              <div className="section-content relative">
                <div className="row" id="row-1749262871">
                  <div id="col-1302321468" className="col small-12 large-12">
                    <div className="col-inner">
                      <p style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '120%' }}>
                          <strong>
                            <span style={{ color: '#000000' }}>S???n ph???m c??ng danh m???c:</span>
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
                              {productCategories?.nodes?.map((item) => (
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
                                          <Link href={`/san-pham/${item.slug}`}>
                                            <img
                                              width={300}
                                              height={300}
                                              src={item.image?.sourceUrl}
                                              data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png"
                                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                              alt=""
                                              loading="lazy"
                                              srcSet={item.image?.srcSet}
                                              data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w"
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
                                            <Link href={`/san-pham/${item.slug}`}>{item.name}</Link>
                                          </p>
                                        </div>
                                        <div className="price-wrapper">
                                          <span className="price">
                                            <span className="rrp-price">Gi?? c??: </span>
                                            <span className="amount">Gi??: Li??n h???</span>
                                          </span>
                                        </div>{' '}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                        {/* <button
                        className="flickity-button flickity-prev-next-button previous"
                        type="button"
                        aria-label="Previous"
                      >
                        <svg className="flickity-button-icon" viewBox="0 0 100 100">
                          <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" />
                        </svg>
                      </button>
                      <button
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
                      </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n#section_1300839607 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  background-color: rgb(255, 255, 255);\n}\n'
                }}
              />
            </section>

            <div id="product-sidebar" className="mfp-hide">
              <div className="sidebar-inner">
                <div className="hide-for-off-canvas" style={{ width: '100%' }}>
                  <ul className="next-prev-thumbs is-small nav-right text-right">
                    {' '}
                    <li className="prod-dropdown has-dropdown">
                      <a
                        href="https://chongthamnguyenphat.com/san-pham/epoxy-ak-1401/"
                        rel="next"
                        className="button icon is-outline circle"
                      >
                        <i className="icon-angle-right" />{' '}
                      </a>
                      <div className="nav-dropdown">
                        <a title="Epoxy AK-1401" href="https://chongthamnguyenphat.com/san-pham/epoxy-ak-1401/">
                          <img
                            width={100}
                            height={100}
                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                            data-src="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg"
                            className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image"
                            alt=""
                            loading="lazy"
                            srcSet=""
                            data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2020/03/AK-1401-300x300.jpg 300w"
                            sizes="(max-width: 100px) 100vw, 100px"
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <aside id="woocommerce_product_categories-3" className="widget woocommerce widget_product_categories">
                  <span className="widget-title shop-sidebar">Danh m???c s???n ph???m</span>
                  <div className="is-divider small" />
                  <ul className="product-categories">
                    <li className="cat-item cat-item-79 cat-parent has-child" aria-expanded="false">
                      <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/">Keo x??? l?? r?? r??? n?????c</a>{' '}
                      <span className="count">(43)</span>
                      <button className="toggle">
                        <i className="icon-angle-down" />
                      </button>
                      <ul className="children">
                        <li className="cat-item cat-item-90">
                          <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/chong-tham-san/">
                            Ch???ng th???m s??n
                          </a>{' '}
                          <span className="count">(16)</span>
                        </li>
                        <li className="cat-item cat-item-82">
                          <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/epoxy-san-cong-nghiep/">
                            Epoxy s??n c??ng nghi???p
                          </a>{' '}
                          <span className="count">(1)</span>
                        </li>
                        <li className="cat-item cat-item-83">
                          <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/phu-kien-ho-tro/">
                            Ph??? ki???n h??? tr???
                          </a>{' '}
                          <span className="count">(10)</span>
                        </li>
                        <li className="cat-item cat-item-84">
                          <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/water-stop-pvc/">
                            Water stop PVC
                          </a>{' '}
                          <span className="count">(2)</span>
                        </li>
                        <li className="cat-item cat-item-85">
                          <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/xu-li-nut-be-tong/">
                            X??? l?? n???t b?? t??ng
                          </a>{' '}
                          <span className="count">(5)</span>
                        </li>
                        <li className="cat-item cat-item-81">
                          <a href="https://chongthamnguyenphat.com/danh-muc/xu-ly-ro-ri-nuoc/xu-li-ro-ri-nuoc/">
                            X??? l?? r?? r??? n?????c
                          </a>{' '}
                          <span className="count">(5)</span>
                        </li>
                      </ul>
                    </li>
                    <li className="cat-item cat-item-89 cat-parent has-child" aria-expanded="false">
                      <a href="https://chongthamnguyenphat.com/danh-muc/quy-trinh-bom-keo-pu/">
                        Quy tr??nh thi c??ng b??m keo
                      </a>{' '}
                      <span className="count">(3)</span>
                      <button className="toggle">
                        <i className="icon-angle-down" />
                      </button>
                      <ul className="children">
                        <li className="cat-item cat-item-80">
                          <a href="https://chongthamnguyenphat.com/danh-muc/quy-trinh-bom-keo-pu/quy-trinh-chong-nut/">
                            Quy tr??nh ch???ng n???t
                          </a>{' '}
                          <span className="count">(2)</span>
                        </li>
                      </ul>
                    </li>
                    <li className="cat-item cat-item-15 current-cat active">
                      <a href="https://chongthamnguyenphat.com/danh-muc/sp-chong-tham-test/">
                        S???n ph???m ch???ng th???m test
                      </a>{' '}
                      <span className="count">(3)</span>
                    </li>
                    <li className="cat-item cat-item-86">
                      <a href="https://chongthamnguyenphat.com/danh-muc/tai-lieu-thi-cong-thi-cong-chong-tham/">
                        T??i li???u thi c??ng - thi c??ng ch???ng th???m
                      </a>{' '}
                      <span className="count">(10)</span>
                    </li>
                  </ul>
                </aside>
                <aside id="woocommerce_products-3" className="widget woocommerce widget_products">
                  <span className="widget-title shop-sidebar">S???n ph???m m???i nh???t</span>
                  <div className="is-divider small" />
                  <ul className="product_list_widget">
                    <li>
                      <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-pha-xi-mang-ak-seal/">
                        <img
                          width={100}
                          height={100}
                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                          data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png"
                          className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet=""
                          data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397559486_b260035510fc46d53f243313ce3f98fe-removebg-preview-300x300.png 300w"
                          sizes="(max-width: 100px) 100vw, 100px"
                        />{' '}
                        <span className="product-title">Ch???ng th???m pha xi m??ng AK-Seal</span>
                      </a>
                      <span className="rrp-price">Gi?? c??: </span>
                      <span className="amount">Gi??: Li??n h???</span>
                    </li>
                    <li>
                      <a href="https://chongthamnguyenphat.com/san-pham/chong-tham-acrylic-ak-800/">
                        <img
                          width={100}
                          height={100}
                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                          data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png"
                          className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet=""
                          data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238395209744_a0a7a8d2bab5da407b5bf221ca25c36b__1_-removebg-preview-1-300x300.png 300w"
                          sizes="(max-width: 100px) 100vw, 100px"
                        />{' '}
                        <span className="product-title">Ch???ng Th???m Acrylic AK-800</span>
                      </a>
                      <span className="rrp-price">Gi?? c??: </span>
                      <span className="amount">Gi??: Li??n h???</span>
                    </li>
                    <li>
                      <a href="https://chongthamnguyenphat.com/san-pham/ak-pu1000-chong-tham-polyurethane-lo-thien/">
                        <img
                          width={100}
                          height={100}
                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                          data-src="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png"
                          className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet=""
                          data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-100x100.png 100w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-150x150.png 150w, https://chongthamnguyenphat.com/wp-content/uploads/2022/03/z3238397563620_bcd45c4e422f83eb718e41f7c5b51033-removebg-preview-300x300.png 300w"
                          sizes="(max-width: 100px) 100vw, 100px"
                        />{' '}
                        <span className="product-title">AK- PU1000 (Ch???ng th???m Polyurethane G???c N?????c)</span>
                      </a>
                      <span className="rrp-price">Gi?? c??: </span>
                      <span className="amount">Gi??: Li??n h???</span>
                    </li>
                    <li>
                      <a href="https://chongthamnguyenphat.com/san-pham/thanh-chen-khe-backer-rod/">
                        <img
                          width={100}
                          height={100}
                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                          data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg"
                          className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet=""
                          data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-300x300.jpg 300w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-768x768.jpg 768w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1-600x600.jpg 600w, https://chongthamnguyenphat.com/wp-content/uploads/2021/09/xop-chen-khe-backer-rod-1.jpg 800w"
                          sizes="(max-width: 100px) 100vw, 100px"
                        />{' '}
                        <span className="product-title">Backer rod Thanh Ch??n Khe</span>
                      </a>
                      <span className="rrp-price">Gi?? c??: </span>
                      <span className="amount">Gi??: Li??n h???</span>
                    </li>
                    <li>
                      <a href="https://chongthamnguyenphat.com/san-pham/chai-xit-chong-tham-ak-plex/">
                        <img
                          width={100}
                          height={100}
                          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                          data-src="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg"
                          className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet=""
                          data-srcset="https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-100x100.jpg 100w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-150x150.jpg 150w, https://chongthamnguyenphat.com/wp-content/uploads/2021/04/7104da314b0bb955e01a-300x300.jpg 300w"
                          sizes="(max-width: 100px) 100vw, 100px"
                        />{' '}
                        <span className="product-title">Chai x???t ch???ng th???m AK-Plex</span>
                      </a>
                      <span className="rrp-price">Gi?? c??: </span>
                      <span className="amount">Gi??: Li??n h???</span>
                    </li>
                  </ul>
                </aside>
                <aside id="woocommerce_product_tag_cloud-7" className="widget woocommerce widget_product_tag_cloud">
                  <span className="widget-title shop-sidebar">T??? kh??a s???n ph???m</span>
                  <div className="is-divider small" />
                  <div className="tagcloud">
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/3b-100/"
                      className="tag-cloud-link tag-link-139 tag-link-position-1"
                      style={{ fontSize: '8pt' }}
                      aria-label="3b-100 (1 s???n ph???m)"
                    >
                      3b-100
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/3b-800/"
                      className="tag-cloud-link tag-link-132 tag-link-position-2"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="3b-800 (2 s???n ph???m)"
                    >
                      3b-800
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/acrylic/"
                      className="tag-cloud-link tag-link-115 tag-link-position-3"
                      style={{ fontSize: '8pt' }}
                      aria-label="acrylic (1 s???n ph???m)"
                    >
                      acrylic
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/acrylic-sl800/"
                      className="tag-cloud-link tag-link-114 tag-link-position-4"
                      style={{ fontSize: '8pt' }}
                      aria-label="acrylic sl800 (1 s???n ph???m)"
                    >
                      acrylic sl800
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/bien-phap-thi-cong-chong-tham-bang-sika/"
                      className="tag-cloud-link tag-link-161 tag-link-position-5"
                      style={{ fontSize: '22pt' }}
                      aria-label="bi???n ph??p thi c??ng ch???ng th???m b???ng sika (3 s???n ph???m)"
                    >
                      bi???n ph??p thi c??ng ch???ng th???m b???ng sika
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/bien-phap-thi-cong-chong-tham-be-nuoc-sinh-hoat/"
                      className="tag-cloud-link tag-link-165 tag-link-position-6"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="bi???n ph??p thi c??ng ch???ng th???m b??? n?????c sinh ho???t (2 s???n ph???m)"
                    >
                      bi???n ph??p thi c??ng ch???ng th???m b??? n?????c sinh ho???t
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/bang-can-nuoc/"
                      className="tag-cloud-link tag-link-125 tag-link-position-7"
                      style={{ fontSize: '8pt' }}
                      aria-label="b??ng c???n n?????c (1 s???n ph???m)"
                    >
                      b??ng c???n n?????c
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-nut-san-be-tong/"
                      className="tag-cloud-link tag-link-157 tag-link-position-8"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="ch???ng n???t s??n b?? t??ng (2 s???n ph???m)"
                    >
                      ch???ng n???t s??n b?? t??ng
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-nut-san-bang-may-bom-keo-sl500/"
                      className="tag-cloud-link tag-link-160 tag-link-position-9"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="ch???ng n???t s??n b???ng m??y b??m keo Sl500 (2 s???n ph???m)"
                    >
                      ch???ng n???t s??n b???ng m??y b??m keo Sl500
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-be-nuoc/"
                      className="tag-cloud-link tag-link-167 tag-link-position-10"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="ch???ng th???m b??? n?????c (2 s???n ph???m)"
                    >
                      ch???ng th???m b??? n?????c
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-be-nuoc-uong/"
                      className="tag-cloud-link tag-link-164 tag-link-position-11"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="ch???ng th???m b??? n?????c u???ng (2 s???n ph???m)"
                    >
                      ch???ng th???m b??? n?????c u???ng
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-ho-pit-thang-may/"
                      className="tag-cloud-link tag-link-137 tag-link-position-12"
                      style={{ fontSize: '8pt' }}
                      aria-label="ch???ng th???m h??? pit thang m??y (1 s???n ph???m)"
                    >
                      ch???ng th???m h??? pit thang m??y
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san/"
                      className="tag-cloud-link tag-link-136 tag-link-position-13"
                      style={{ fontSize: '8pt' }}
                      aria-label="ch???ng th???m s??n (1 s???n ph???m)"
                    >
                      ch???ng th???m s??n
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san-mai/"
                      className="tag-cloud-link tag-link-182 tag-link-position-14"
                      style={{ fontSize: '22pt' }}
                      aria-label="Ch???ng th???m s??n M??i (3 s???n ph???m)"
                    >
                      Ch???ng th???m s??n M??i
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san-nha/"
                      className="tag-cloud-link tag-link-135 tag-link-position-15"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="ch???ng th???m s??n nh?? (2 s???n ph???m)"
                    >
                      ch???ng th???m s??n nh??
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/chong-tham-san-nha-bang-sl-200/"
                      className="tag-cloud-link tag-link-134 tag-link-position-16"
                      style={{ fontSize: '8pt' }}
                      aria-label="Ch???ng Th???m S??n Nh?? b???ng SL-200 (1 s???n ph???m)"
                    >
                      Ch???ng Th???m S??n Nh?? b???ng SL-200
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/db2015/"
                      className="tag-cloud-link tag-link-98 tag-link-position-17"
                      style={{ fontSize: '8pt' }}
                      aria-label="db2015 (1 s???n ph???m)"
                    >
                      db2015
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/hyperstop/"
                      className="tag-cloud-link tag-link-97 tag-link-position-18"
                      style={{ fontSize: '8pt' }}
                      aria-label="hyperstop (1 s???n ph???m)"
                    >
                      hyperstop
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/hyperstop-db2015/"
                      className="tag-cloud-link tag-link-96 tag-link-position-19"
                      style={{ fontSize: '8pt' }}
                      aria-label="hyperstop db2015 (1 s???n ph???m)"
                    >
                      hyperstop db2015
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-acrylic/"
                      className="tag-cloud-link tag-link-113 tag-link-position-20"
                      style={{ fontSize: '8pt' }}
                      aria-label="keo ch???ng th???m acrylic (1 s???n ph???m)"
                    >
                      keo ch???ng th???m acrylic
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-cho-tuong-3b-800/"
                      className="tag-cloud-link tag-link-133 tag-link-position-21"
                      style={{ fontSize: '8pt' }}
                      aria-label="Keo ch???ng th???m cho t?????ng 3b-800 (1 s???n ph???m)"
                    >
                      Keo ch???ng th???m cho t?????ng 3b-800
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-ho-boi/"
                      className="tag-cloud-link tag-link-131 tag-link-position-22"
                      style={{ fontSize: '8pt' }}
                      aria-label="Keo ch???ng th???m h??? B??i (1 s???n ph???m)"
                    >
                      Keo ch???ng th???m h??? B??i
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-ho-boi-sl200/"
                      className="tag-cloud-link tag-link-128 tag-link-position-23"
                      style={{ fontSize: '8pt' }}
                      aria-label="Keo ch???ng th???m h??? B??i SL200 (1 s???n ph???m)"
                    >
                      Keo ch???ng th???m h??? B??i SL200
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-tron-ximang-3b-100/"
                      className="tag-cloud-link tag-link-138 tag-link-position-24"
                      style={{ fontSize: '8pt' }}
                      aria-label="keo ch???ng th???m tr???n xim??ng 3B-100 (1 s???n ph???m)"
                    >
                      keo ch???ng th???m tr???n xim??ng 3B-100
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-chong-tham-dan-hoi/"
                      className="tag-cloud-link tag-link-112 tag-link-position-25"
                      style={{ fontSize: '8pt' }}
                      aria-label="keo ch???ng th???m ????n h???i (1 s???n ph???m)"
                    >
                      keo ch???ng th???m ????n h???i
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-dan-da/"
                      className="tag-cloud-link tag-link-121 tag-link-position-26"
                      style={{ fontSize: '8pt' }}
                      aria-label="Keo d??n ???? (1 s???n ph???m)"
                    >
                      Keo d??n ????
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-dan-da-epoxy-resin/"
                      className="tag-cloud-link tag-link-123 tag-link-position-27"
                      style={{ fontSize: '8pt' }}
                      aria-label="Keo d??n ???? Epoxy Resin (1 s???n ph???m)"
                    >
                      Keo d??n ???? Epoxy Resin
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-dan-da-goc-epoxy/"
                      className="tag-cloud-link tag-link-122 tag-link-position-28"
                      style={{ fontSize: '8pt' }}
                      aria-label="keo d??n ???? g???c epoxy (1 s???n ph???m)"
                    >
                      keo d??n ???? g???c epoxy
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-pu-sl-668/"
                      className="tag-cloud-link tag-link-107 tag-link-position-29"
                      style={{ fontSize: '8pt' }}
                      aria-label="keo pu sl-668 (1 s???n ph???m)"
                    >
                      keo pu sl-668
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-pu-sl668/"
                      className="tag-cloud-link tag-link-103 tag-link-position-30"
                      style={{ fontSize: '8pt' }}
                      aria-label="keo pu sl668 (1 s???n ph???m)"
                    >
                      keo pu sl668
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/keo-pu-truong-no/"
                      className="tag-cloud-link tag-link-105 tag-link-position-31"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="keo pu tr????ng n??? (2 s???n ph???m)"
                    >
                      keo pu tr????ng n???
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/kim-bom-keo/"
                      className="tag-cloud-link tag-link-99 tag-link-position-32"
                      style={{ fontSize: '8pt' }}
                      aria-label="kim b??m keo (1 s???n ph???m)"
                    >
                      kim b??m keo
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/kim-bom-keo-pu/"
                      className="tag-cloud-link tag-link-100 tag-link-position-33"
                      style={{ fontSize: '8pt' }}
                      aria-label="kim b??m keo pu (1 s???n ph???m)"
                    >
                      kim b??m keo pu
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/luoi-thuy-tinh/"
                      className="tag-cloud-link tag-link-119 tag-link-position-34"
                      style={{ fontSize: '8pt' }}
                      aria-label="l?????i th???y tinh (1 s???n ph???m)"
                    >
                      l?????i th???y tinh
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/luoi-thuy-tinh-chong-nut/"
                      className="tag-cloud-link tag-link-120 tag-link-position-35"
                      style={{ fontSize: '8pt' }}
                      aria-label="l?????i th???y tinh ch???ng n???t (1 s???n ph???m)"
                    >
                      l?????i th???y tinh ch???ng n???t
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/pu-sl-668/"
                      className="tag-cloud-link tag-link-106 tag-link-position-36"
                      style={{ fontSize: '8pt' }}
                      aria-label="pu sl-668 (1 s???n ph???m)"
                    >
                      pu sl-668
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/pvc-v15/"
                      className="tag-cloud-link tag-link-126 tag-link-position-37"
                      style={{ fontSize: '8pt' }}
                      aria-label="PVC V15 (1 s???n ph???m)"
                    >
                      PVC V15
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/sl-200/"
                      className="tag-cloud-link tag-link-130 tag-link-position-38"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="SL-200 (2 s???n ph???m)"
                    >
                      SL-200
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/sl200/"
                      className="tag-cloud-link tag-link-129 tag-link-position-39"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="SL200 (2 s???n ph???m)"
                    >
                      SL200
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/sl668/"
                      className="tag-cloud-link tag-link-104 tag-link-position-40"
                      style={{ fontSize: '16.4pt' }}
                      aria-label="sl668 (2 s???n ph???m)"
                    >
                      sl668
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/sl800/"
                      className="tag-cloud-link tag-link-111 tag-link-position-41"
                      style={{ fontSize: '8pt' }}
                      aria-label="sl800 (1 s???n ph???m)"
                    >
                      sl800
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/thanh-truong-no/"
                      className="tag-cloud-link tag-link-95 tag-link-position-42"
                      style={{ fontSize: '8pt' }}
                      aria-label="thanh tr????ng n??? (1 s???n ph???m)"
                    >
                      thanh tr????ng n???
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/thanh-truong-no-hyperstop-db2015/"
                      className="tag-cloud-link tag-link-94 tag-link-position-43"
                      style={{ fontSize: '8pt' }}
                      aria-label="Thanh tr????ng n??? hyperstop db2015 (1 s???n ph???m)"
                    >
                      Thanh tr????ng n??? hyperstop db2015
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/waterstop/"
                      className="tag-cloud-link tag-link-127 tag-link-position-44"
                      style={{ fontSize: '8pt' }}
                      aria-label="Waterstop (1 s???n ph???m)"
                    >
                      Waterstop
                    </a>
                    <a
                      href="https://chongthamnguyenphat.com/tu-khoa/waterstop-pvc-v15/"
                      className="tag-cloud-link tag-link-124 tag-link-position-45"
                      style={{ fontSize: '8pt' }}
                      aria-label="Waterstop PVC V15 (1 s???n ph???m)"
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
    </div>
  );
};
export default ProductDetail;
