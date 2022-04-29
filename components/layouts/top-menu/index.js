import Link from 'next/link';
import { useMemo } from 'react';
import { useRouter } from 'next/router';


export default function NavMenu({ items = [], pages = [] }) {
  return (
    <div id="wide-nav" className="header-bottom wide-nav nav-dark hide-for-medium">
      <div className="flex-row container">
        <div className="flex-col hide-for-medium flex-left">
          <ul className="nav header-nav header-bottom-nav nav-left  nav-size-large nav-spacing-large">
            {/* {items.map((element, index) => (
              <ItemLink key={element.id} item={element} />
            ))} */}
            {/* {pages.map((element, index) => (
              <ItemLink key={element.slug} item={element} />
            ))} */}
            <li
              id="menu-item-1658"
              class="hotline-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-1658"
            >
              <a href="tel:+84908485861" class="nav-top-link">
                Hotline: 090 84 85 861
              </a>
            </li>
            <li class="cart-item has-icon has-dropdown">
              <a href="https://nhaankhang.com/gio-hang/" title="Giỏ hàng" class="header-cart-link is-small">
                <span class="cart-icon image-icon">
                  <strong>0</strong>
                </span>
              </a>

              <ul class="nav-dropdown nav-dropdown-default">
                <li class="html widget_shopping_cart">
                  <div class="widget_shopping_cart_content">
                    <p class="woocommerce-mini-cart__empty-message">Chưa có sản phẩm trong giỏ hàng.</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex-col hide-for-medium flex-right flex-grow">
          <ul className="nav header-nav header-bottom-nav nav-right  nav-size-large nav-spacing-large">
            <li className="header-search-form search-form html relative has-icon">
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
                          defaultValue=""
                          name="s"
                        />
                        <input type="hidden" name="post_type" defaultValue="product" />
                      </div>
                      <div className="flex-col">
                        <button
                          type="submit"
                          value="Tìm kiếm"
                          className="ux-search-submit submit-button secondary button icon mb-0"
                        >
                          <i className="icon-search" />{' '}
                        </button>
                      </div>
                    </div>
                    <div className="live-search-results text-left z-top" />
                  </form>
                </div>{' '}
              </div>
            </li>{' '}
          </ul>
        </div>
      </div>
    </div>
  );
};

// const ItemLink = ({ item }) => {
//   // const { label, path } = item;
//   const { uri, title } = item;
//   const router = useRouter();
//   const classLi =
//     (router.asPath.includes(uri) ? 'active ' : '') +
//     'menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18';
//   return (
//     <li id="menu-item-18" className={classLi}>
//       <Link href={uri} aria-current="page" className="nav-top-link">
//         {title}
//       </Link>
//     </li>
//   );
// };
