// import React from 'react';
// import axiosClient from '@/api/base/axios-client';
// import { getterMenus } from '../geters';
// export async function getStaticPaths() {
//   const pages = await axiosClient.get('/wp/v2/pages');
//   const paths = pages.map((page) => ({
//     params: { slug: page.slug }
//   }));
//   return { paths, fallback: 'blocking' };
// }
// export async function getStaticProps({ params }) {
//   const menuItems = await getterMenus('top-menu');
//   const result = await axiosClient.get('wp/v2/pages?slug=' + params.slug);
//   const data = result[0] || {};
//   return { props: { data, menuItems }, revalidate: 60 * 60 };
// }
// export default function Home({ data }) {
//   const content = data.content?.rendered;
//   return (
//     <div>
//       <div dangerouslySetInnerHTML={{ __html: content }}></div>
//     </div>
//   );
// }
