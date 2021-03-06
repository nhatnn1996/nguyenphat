import { useInfo } from 'context/info';
import React from 'react';
const Contact = () => {
  const { sliders, infoSetting } = useInfo();
  return (
    <div id="content" role="main" className="content-area">
      <div className="img has-hover x md-x lg-x y md-y lg-y" id="image_1347406328">
        <div className="img-inner image-cover dark" style={{ paddingTop: '40%' }}>
          <img
            width={5693}
            height={500}
            src={sliders[0] || '/images/banner.jpeg'}
            data-src={sliders[0] || '/images/banner.jpeg'}
            className="attachment-original size-original lazy-load-active"
            alt=""
            loading="lazy"
          />
        </div>
        <style dangerouslySetInnerHTML={{ __html: '\n#image_1347406328 {\n  width: 100%;\n}\n' }} />
      </div>
      <section className="section" id="section_1622685517">
        <div className="bg section-bg fill bg-fill bg-loaded"></div>
        <div className="section-content relative">
          <div className="row" id="row-202482003">
            <div id="col-2040778460" className="col medium-7 small-12 large-7">
              <div className="col-inner">
                <p>
                  <span style={{ fontSize: '130%', color: '#000000' }}>
                    <strong>Liên hệ với chúng tôi</strong>
                  </span>
                </p>
                <p>
                  <span className="Apple-style-span">
                    Kinh doanh tại thị trường mới nổi như Việt Nam luôn là thách thức lớn đối với hầu hết các doanh
                    nghiệp. Một sân chơi mà các luật lệ còn đang được hình thành, một sân chơi mà sự biến đổi, sự cạnh
                    tranh ngày một gia tăng buộc doanh nghiệp phải nỗ lực hơn nữa trong các phương thức tiếp cận khách
                    hàng. Trong bối cảnh đó, việc tiếp cận với khách hàng qua internet đang là một lựa chọn thông minh
                    của nhiều nhà quản lý
                    <br />
                  </span>
                </p>
              </div>
            </div>
            <div id="col-799736372" className="col medium-5 small-12 large-5">
              <div className="col-inner">
                <p>
                  <span style={{ fontSize: '130%' }}>
                    <strong>
                      <span style={{ color: '#000000' }}>Thông tin liên hệ</span>
                    </strong>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: '95%', color: '#333333' }}>
                    –<strong> Địa chỉ:</strong> {infoSetting?.address}{' '}
                  </span>
                  <br />
                  <span style={{ fontSize: '95%', color: '#333333' }}>
                    –<strong> Văn phòng giao dịch:</strong> {infoSetting?.office}{' '}
                  </span>
                  <br />
                  <span style={{ fontSize: '95%', color: '#333333' }}>
                    – <strong>SĐT:</strong> {infoSetting?.hotline}
                  </span>
                  <br />
                  <span style={{ fontSize: '95%', color: '#333333' }}>
                    – <strong>Email:</strong>&nbsp;{infoSetting?.email}
                  </span>
                </p>
              </div>
            </div>
            <div id="col-711893765" className="col small-12 large-12">
              <div className="col-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752879901d7eb9%3A0x6564e6992ce6bcec!2zMzYsIDMxIMSQxrDhu51uZyBT4buRIDQsIEhp4buHcCBCw6xuaCBQaMaw4bubYywgVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1655539137276!5m2!1svi!2s"
                  width={'100%'}
                  height={450}
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.988547815108!2d106.70878551502078!3d10.812187892297235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528978e2e0a6d%3A0x92373c6e58c808b9!2zQ8O0bmcgVHkgVE5ISCDEkOG6p3UgVMawIFjDonkgROG7sW5nIFRoxrDGoW5nIE3huqFpIE5ndXnDqm4gUGjDoXQ!5e0!3m2!1svi!2s!4v1651996464584!5m2!1svi!2s"
                  width={'100%'}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: '\n#section_1622685517 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n'
          }}
        />
      </section>
    </div>
  );
};
export default Contact;
