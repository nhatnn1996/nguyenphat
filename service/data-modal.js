export const post = (element) => {
  return {
    slug: element.slug,
    title: element.title,
    content: element.content,
    date: element.date,
    media_details: element._embedded['wp:featuredmedia'][0]?.media_details || {}
  };
};

export const product = (element) => {
  return {
    slug: element.slug,
    name: element.name,
    sku: element.sku,
    image: element?.images[0]?.src,
    date_modified: element?.date_modified
  };
};
