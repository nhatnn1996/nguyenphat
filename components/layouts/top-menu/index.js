import Link from 'next/link';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

const NavMenu = ({ items = [] }) => {
  return (
    <div id="wide-nav" className="header-bottom wide-nav nav-dark hide-for-medium">
      <div className="flex-row container">
        <div className="flex-col hide-for-medium flex-left">
          <ul className="nav header-nav header-bottom-nav nav-left  nav-size-large nav-spacing-large">
            {items.map((element, index) => (
              <ItemLink key={element.id} item={element} />
            ))}
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
export default NavMenu;

const ItemLink = ({ item }) => {
  const baseUrl = process.env.API_URL;
  const { title, url } = item;
  const slug = useMemo(() => {
    return url
      .replace(baseUrl, '')
      .split('/')
      .filter((item) => item)
      .join('/');
  }, [url]);
  const router = useRouter();
  const classLi =
    (router.asPath.includes(slug) ? 'active ' : '') +
    'menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18';
  return (
    <li id="menu-item-18" className={classLi}>
      <Link href={slug} aria-current="page" className="nav-top-link">
        {title.rendered}
      </Link>
    </li>
  );
};
