import Link from 'next/link';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

const NavMenu = () => {
  const items = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Giới thiệu', path: '/gioi-thieu' },
    { label: 'Sản phẩm', path: '/san-pham' },
    { label: 'Dịch vụ', path: '/dich-vu' },
    { label: 'Dự án', path: '/du-an' },
    { label: 'Tin Tức', path: '/lien-he' }
  ];
  return (
    <div id="wide-nav" class="header-bottom wide-nav nav-dark hide-for-medium snipcss-io4AT">
      <div class="flex-row container">
        <div class="flex-col hide-for-medium flex-left">
          <ul class="nav header-nav header-bottom-nav nav-left nav-size-large nav-spacing-large snip-ul">
            {items.map((element, index) => (
              <ItemLink key={element} item={element} />
            ))}
            <li
              id="menu-item-1658"
              class="hotline-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-1658 snip-li"
            >
              <a href="tel:+84908485861" class="nav-top-link snip-a">
                Hotline: 028 37 27 3679
              </a>
            </li>
            <li class="cart-item has-icon has-dropdown snip-li">
              <a href="https://nhaankhang.com/gio-hang/" title="Giỏ hàng" class="header-cart-link is-small snip-a">
                <span class="cart-icon image-icon">
                  <strong>0</strong>
                </span>
              </a>
              <ul class="nav-dropdown nav-dropdown-default snip-ul">
                <li class="html widget_shopping_cart snip-li">
                  <div class="widget_shopping_cart_content">
                    <p class="woocommerce-mini-cart__empty-message snip-p">Chưa có sản phẩm trong giỏ hàng.</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex-col hide-for-medium flex-right flex-grow">
          <ul class="nav header-nav header-bottom-nav nav-right nav-size-large nav-spacing-large snip-ul">
            <li class="header-search-form search-form html relative has-icon snip-li">
              <div class="header-search-form-wrapper">
                <div class="searchform-wrapper ux-search-box relative form-flat is-normal">
                  <form role="search" method="get" class="searchform" action="https://nhaankhang.com/">
                    <div class="flex-row relative">
                      <div class="flex-col flex-grow">
                        <label class="screen-reader-text" for="woocommerce-product-search-field-0">
                          Tìm kiếm:
                        </label>
                        <input
                          type="search"
                          id="woocommerce-product-search-field-0"
                          class="search-field mb-0"
                          placeholder="Bạn cần tìm gì..."
                          value=""
                          name="s"
                        />
                        <input type="hidden" name="post_type" value="product" />
                      </div>
                      <div class="flex-col">
                        <button
                          type="submit"
                          value="Tìm kiếm"
                          class="ux-search-submit submit-button secondary button icon mb-0 snip-button"
                        >
                          <i class="icon-search"></i>
                        </button>
                      </div>
                    </div>
                    <div class="live-search-results text-left z-top"></div>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavMenu;

const ItemLink = ({ item }) => {
  const { label, path } = item;
  const router = useRouter();
  const classLi =
    (router.asPath.includes(path) ? 'active ' : '') +
    'menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18';
  return (
    <li id="menu-item-18" className={classLi}>
      <Link href={path} aria-current="page" className="nav-top-link">
        {label}
      </Link>
    </li>
  );
};
