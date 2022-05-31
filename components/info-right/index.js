import React from 'react';
import Link from 'next/link';
import { formSubmit } from '@/geters/form';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';

const InfoRight = ({ newProds, newNewsData }) => {
  const [submitGfForm, { data, loading, error }] = useMutation(formSubmit);
  const submit = (value) => {
    submitGfForm({
      variables: value
    });
    
  };

  const validate = (values) => {
    const errors = {};
    if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(values.phone)) {
      errors.phone = 'Số điện thoại không đúng';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email không hợp lệ';
    }
    return errors;
  };

  return (
    <div className="post-sidebar large-3 col">
      <div id="secondary" className="widget-area " role="complementary">
        <aside id="text-2" className="widget widget_text">
          <div className="textwidget">
            <div className="row row-small section-body" id="row-1864619469">
              <div id="col-1901087800" className="col cot4 small-12 large-12">
                <div className="col-inner">
                  <div className="form-lien-he">
                    <div className="tieu-de-form">LIÊN HỆ TƯ VẤN</div>
                    <div role="form" className="wpcf7" id="wpcf7-f2153-o1" lang="vi" dir="ltr">
                      <div className="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                        <ul />
                      </div>
                      <Formik
                        initialValues={{}}
                        validate={validate}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          submit(values);
                          console.log(values);
                          setSubmitting(true);
                          resetForm();
                          alert('Gửi thành công, chúng tôi sẽ gọi lại bạn sớm thôi !');
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                          /* and other goodies */
                        }) => (
                          <form onSubmit={handleSubmit} id="contact-form">
                            <p className="error">{errors.email && touched.email && errors.email}</p>
                            <p className="error">{errors.phone && touched.phone && errors.phone}</p>
                            <input
                              type="text"
                              name="name"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Họ tên của bạn..."
                            />
                            <input
                              type="tel"
                              name="phone"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              placeholder="Số điện thoại của bạn..."
                            />
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder="Email"
                              className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                            />
                            <textarea
                              name="content"
                              cols={40}
                              rows={10}
                              className="wpcf7-form-control wpcf7-textarea"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.content}
                              placeholder="Bạn quan tâm đến dịch vụ nào ? Thông tin thêm..."
                            />
                            <input
                              type="submit"
                              defaultValue="Gửi liên hệ"
                              className="wpcf7-form-control wpcf7-submit"
                              // disabled={isSubmitting}
                            />
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                  <div className="tieu-de">Tiêu điểm</div>
                  <div className="row aaa large-columns-1 medium-columns-1 small-columns-1 row-collapse row-full-width has-shadow row-box-shadow-1">
                    {newNewsData.map((item) => (
                      <div
                        key={item.slug}
                        className="col post-item"
                        style={{
                          margin: '10px 0px',
                          boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                        }}
                      >
                        <div className="col-innere">
                          <Link href={`/tin-tuc/${item.slug}`} className="plain">
                            <div className="box box-vertical box-text-middle box-blog-post has-hover">
                              <div className="box-image" style={{ width: '30%' }}>
                                <div className="image-cover">
                                  <img
                                    width={221}
                                    height={300}
                                    src={item.featuredImage.node.sourceUrl}
                                    className="attachment-medium size-medium wp-post-image lazy-load-active"
                                    alt={item.featuredImage.node.title}
                                    loading="lazy"
                                    srcSet={item.featuredImage.node.srcSet}
                                    sizes="(max-width: 221px) 100vw, 221px"
                                  />{' '}
                                </div>
                              </div>
                              <div className="box-text text-left is-small">
                                <div className="box-text-inner blog-post-inner">
                                  <h5 className="post-title is-large ">{item.title}</h5>
                                  <div className="is-divider" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <p />
                      </div>
                    ))}
                  </div>
                  <div className="portfolio-sidebar">
                    <div className="tieu-de">Sản phẩm mới nhất</div>
                    <ul className="product_list_widget">
                      {newProds.map((item) => (
                        <Link
                          href={`/san-pham/${item.node.slug}`}
                          key={item.node.slug}
                          title="Chống thấm pha xi măng AK-Seal"
                        >
                          <li
                            style={{
                              margin: '10px 0px',
                              boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                            }}
                          >
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
                            <br />
                            <span className="amount">Giá: Liên hệ</span>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default InfoRight;
