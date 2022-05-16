import Link from 'next/link';
import { useState } from 'react';
import NavMenu from '../layouts/top-menu';

const items = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Giới thiệu', path: '/gioi-thieu' },
  { label: 'Sản phẩm', path: '/san-pham' },
  { label: 'Dịch vụ', path: '/dich-vu' },
  { label: 'Dự án', path: '/du-an' },
  { label: 'Tin Tức', path: '/tin-tuc' },
  { label: 'Liên hệ', path: '/lien-he' }
];

export default function Header({ menuItems, pages }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <header id="header" className="header has-sticky sticky-jump">
      <div className="header-wrapper">
        <div id="masthead" className="header-main hide-for-sticky">
          <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
            <div id="logo" className="flex-col logo">
              <a
                href="/"
                title="Vật liệu chống thấm | Xử lý chống thấm | nhaankhang.com - Tổng đại lý nhập khẩu và Phân phối vật liệu chống thấm, xử lý chống thấm chuyên nghiệp tại thành phố Hồ Chí Minh"
                rel="home"
              >
                <img
                  width={211}
                  height={95}
                  src="/icons/logo.png"
                  className="header_logo header-logo"
                  alt="Vật liệu chống thấm | Xử lý chống thấm | nhaankhang.com"
                />
                <img
                  width={211}
                  height={95}
                  src="https://nhaankhang.com/wp-content/uploads/2021/11/logo-nha-an-khang-moi-06.jpg"
                  className="header-logo-dark"
                  alt="Vật liệu chống thấm | Xử lý chống thấm | nhaankhang.com"
                />
              </a>
            </div>
            {/* Mobile Left Elements */}
            <div className="flex-col show-for-medium flex-left">
              <ul className="mobile-nav nav nav-left ">
                <li
                  className="nav-icon has-icon"
                  onClick={() => {
                    setOpen((state) => !state);
                  }}
                >
                  <a
                    href="#"
                    data-open="#main-menu"
                    data-pos="center"
                    data-bg="main-menu-overlay"
                    data-color=""
                    className="is-small"
                    aria-label="Menu"
                    aria-controls="main-menu"
                    aria-expanded="false"
                  >
                    <i className="icon-menu" />
                  </a>
                </li>{' '}
              </ul>
            </div>
            <div className="flex-col hide-for-medium flex-right">
              <ul className="header-nav header-nav-main nav nav-right  nav-uppercase">
                <li className="header-block">
                  <div className="header-block-block-2">
                    <div className="row header-ads" id="row-1566778290">
                      <div id="col-1468273696" className="col small-12 large-12">
                        <div className="col-inner text-right">
                          <div className="img has-hover x md-x lg-x y md-y lg-y" id="image_1680351678">
                            <div className="img-inner dark">
                              <img
                                width={1020}
                                height={93}
                                src="https://nhaankhang.com/wp-content/uploads/2019/06/topbar-03-03-1024x93.jpg"
                                className="attachment-large size-large"
                                alt=""
                                loading="lazy"
                                srcSet="https://nhaankhang.com/wp-content/uploads/2019/06/topbar-03-03-1024x93.jpg 1024w, https://nhaankhang.com/wp-content/uploads/2019/06/topbar-03-03-300x27.jpg 300w, https://nhaankhang.com/wp-content/uploads/2019/06/topbar-03-03-768x70.jpg 768w, https://nhaankhang.com/wp-content/uploads/2019/06/topbar-03-03-600x55.jpg 600w"
                                sizes="(max-width: 1020px) 100vw, 1020px"
                              />
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html: '\n#image_1680351678 {\n  width: 91%;\n}\n'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>{' '}
              </ul>
            </div>
            {/* Mobile Right Elements */}
            <div className="flex-col show-for-medium flex-right"></div>
          </div>
        </div>
        <NavMenu items={items} pages={pages} />
        <MobileMenu
          isOpen={isOpen}
          close={() => {
            setOpen((state) => !state);
          }}
        />
        <div className="header-bg-container fill">
          <div className="header-bg-image fill" />
          <div className="header-bg-color fill" />
        </div>
      </div>
    </header>
  );
}

const MobileMenu = ({ isOpen, close }) => {
  if (!isOpen) return null;
  return (
    <div
      className="mfp-wrap mfp-auto-cursor off-canvas off-canvas-center mfp-ready"
      tabIndex={-1}
      style={{ overflow: 'hidden auto', background: 'white' }}
    >
      <div className="mfp-container mfp-s-ready mfp-inline-holder">
        <div className="mfp-content">
          <div id="main-menu" className="mobile-sidebar no-scrollbar">
            <div className="sidebar-menu no-scrollbar text-center">
              <ul className="nav nav-sidebar nav-vertical nav-uppercase nav-anim">
                {items.map((element) => {
                  return (
                    <li key={element.path} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18">
                      <a href={element.path} aria-current="page">
                        {element.label}
                      </a>
                    </li>
                  );
                })}

                <li className="hotline-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-1658">
                  <a href="tel:+84908485861">Hotline: 090 84 85 861</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mfp-preloader">Loading...</div>
      </div>
      <button title="Close (Esc)" type="button" className="mfp-close" onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1={18} y1={6} x2={6} y2={18} />
          <line x1={6} y1={6} x2={18} y2={18} />
        </svg>
      </button>
    </div>
  );
};
