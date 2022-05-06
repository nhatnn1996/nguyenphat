import React, { useState } from 'react';
import { apollo } from '@/api/index';
import { Service } from '@/components/home/index';
import { homeGQL } from '@/geters/home';

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 }
};

export async function getStaticProps() {
  const result = await apollo.query({ query: homeGQL });

  const home = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    home[key] = element?.nodes || element?.posts || [];
  });
  return { props: home, revalidate: 10 * 60 * 1000 };
}
const Product = ({ posts }) => {
  return <Service data={posts} />;
};
export default Product;
