import axiosClient from '@/api/base/axios-client';
const mapMenu = {
  'top-menu': 18
};
export const getterMenus = async (name) => {
  try {
    const items = await axiosClient.get('/wp/v2/menu-items?menus=' + mapMenu[name]);
    return items;
  } catch (error) {
      console.log("error when get menus");
      return []
  }
};
