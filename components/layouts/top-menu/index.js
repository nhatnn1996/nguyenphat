import Link from 'next/link';
import { useRouter } from 'next/router';

const NavMenu = ({ items }) => {
  return (
    <>
      <div id="wide-nav" className="header-bottom wide-nav nav-dark hide-for-medium snipcss-io4AT">
        <div className="flex-row container">
          <div className="flex-col hide-for-medium flex-left">
            <ul className="nav header-nav header-bottom-nav nav-left nav-size-large nav-spacing-large snip-ul">
              {items.map((element, index) => (
                <ItemLink key={element} item={element} />
              ))}
              <li
                id="menu-item-1658"
                className="hotline-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-1658 snip-li"
              >
                <a href="tel:+84908485861" className="nav-top-link snip-a">
                  Hotline: 028 37 27 3679
                </a>
              </li>
              <li className="cart-item has-icon has-dropdown snip-li">
                <a
                  href="https://nhaankhang.com/gio-hang/"
                  title="Giỏ hàng"
                  className="header-cart-link is-small snip-a"
                >
                  <span className="cart-icon image-icon">
                    <strong>0</strong>
                  </span>
                </a>
                <ul className="nav-dropdown nav-dropdown-default snip-ul">
                  <li className="html widget_shopping_cart snip-li">
                    <div className="widget_shopping_cart_content">
                      <p className="woocommerce-mini-cart__empty-message snip-p">Chưa có sản phẩm trong giỏ hàng.</p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex-col hide-for-medium flex-right flex-grow">
            <ul className="nav header-nav header-bottom-nav nav-right nav-size-large nav-spacing-large snip-ul">
              <li className="header-search-form search-form html relative has-icon snip-li">
                <div className="header-search-form-wrapper">
                  <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                    <form role="search" method="get" className="searchform" action="https://nhaankhang.com/">
                      <div className="flex-row relative">
                        <div className="flex-col flex-grow">
                          <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-0">
                            Tìm kiếm:
                          </label>
                          <input
                            type="search"
                            id="woocommerce-product-search-field-0"
                            className="search-field mb-0"
                            placeholder="Bạn cần tìm gì..."
                            name="s"
                          />
                          <input type="hidden" name="post_type" />
                        </div>
                        <div className="flex-col">
                          <button
                            type="submit"
                            className="ux-search-submit submit-button secondary button icon mb-0 snip-button"
                          >
                            <i className="icon-search"></i>
                          </button>
                        </div>
                      </div>
                      <div className="live-search-results text-left z-top"></div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <MobileMenu isOpen={isOpen} /> */}
    </>
  );
};
export default NavMenu;
const ItemLink = ({ item }) => {
  const { label, path } = item;
  const router = useRouter();
  console.log(path === '/', router.pathname === path);
  const classLi =
    (path === '/' ? (router.pathname === path ? 'active ' : '') : router.asPath.includes(path) ? 'active ' : '') +
    'menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18';
  return (
    <li id="menu-item-18" className={classLi}>
      <Link href={path} aria-current="page" className="nav-top-link">
        {label}
      </Link>
    </li>
  );
};
