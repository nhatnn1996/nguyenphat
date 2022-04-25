import React, { useEffect } from 'react';

import moment from 'moment';
// export async function getStaticPaths() {
//   const { data } = await client.query({ query: GET_CATEGORY });
//   const paths = data.categories.nodes.map((element) => ({
//     params: { ...element, slug: element.name },
//   }));
//   return { paths: paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const { data: resultPost } = await client.query({
//     query: GET_POST_BY,
//     variables: { slug: params.slug },
//   });

//   const post = resultPost || [];
//   return { props: { post } };
// }
export default function Home({}) {
  return <div>quwteywteyeww</div>;
}
