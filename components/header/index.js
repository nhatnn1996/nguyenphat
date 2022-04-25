import Link from 'next/link';
import NavMenu from '../layouts/top-menu';

export default function Header({ menuItems }) {
  return (
    <header id="header" className="header has-sticky sticky-jump">
      <div className="header-wrapper">
        <div id="masthead" className="header-main hide-for-sticky">
          <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
            {/* Logo */}
            <div id="logo" className="flex-col logo">
              {/* Header logo */}
              <a
                href="https://nhaankhang.com/"
                title="Vật liệu chống thấm | Xử lý chống thấm | nhaankhang.com - Tổng đại lý nhập khẩu và Phân phối vật liệu chống thấm, xử lý chống thấm chuyên nghiệp tại thành phố Hồ Chí Minh"
                rel="home"
              >
                <img
                  width={211}
                  height={95}
                  src="https://nhaankhang.com/wp-content/uploads/2021/11/logo-nha-an-khang-moi-06.jpg"
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
                <li className="nav-icon has-icon">
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
            {/* Left Elements */}
            <div className="flex-col hide-for-medium flex-left flex-grow">
              <ul className="header-nav header-nav-main nav nav-left  nav-uppercase"></ul>
            </div>
            {/* Right Elements */}
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
            <div className="flex-col show-for-medium flex-right">
              <ul className="mobile-nav nav nav-right ">
                <li className="cart-item has-icon">
                  <a
                    href="https://nhaankhang.com/gio-hang/"
                    className="header-cart-link off-canvas-toggle nav-top-link is-small"
                    data-open="#cart-popup"
                    data-class="off-canvas-cart"
                    title="Giỏ hàng"
                    data-pos="right"
                  >
                    <span className="cart-icon image-icon">
                      <strong>0</strong>
                    </span>
                  </a>
                  {/* Cart Sidebar Popup */}
                  <div id="cart-popup" className="mfp-hide widget_shopping_cart">
                    <div className="cart-popup-inner inner-padding">
                      <div className="cart-popup-title text-center">
                        <h4 className="uppercase">Giỏ hàng</h4>
                        <div className="is-divider" />
                      </div>
                      <div className="widget_shopping_cart_content">
                        <p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm trong giỏ hàng.</p>
                      </div>
                      <div className="cart-sidebar-content relative" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NavMenu items={menuItems} />
        <div className="header-bg-container fill">
          <div className="header-bg-image fill" />
          <div className="header-bg-color fill" />
        </div>
      </div>
    </header>
  );
}
