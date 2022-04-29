import { gql } from '@apollo/client';
export const newsGQL = gql`
  query News {
    posts(where: { categoryName: "" }) {
      nodes {
        categories {
          edges {
            node {
              id
            }
          }
        }
        featuredImage {
          node {
            fileSize
            slug
            sourceUrl
            srcSet
            uri
            title
          }
        }
        content
        slug
        title
        postId
        date
      }
    }
  }
`;
export const bynewsGQL = gql`
  query ByNews($slug: String!) {
    postBy(slug: $slug) {
      featuredImage {
        node {
          fileSize
          slug
          sourceUrl
          srcSet
          uri
          title
        }
      }
      content
      slug
      title
      postId
      date
    }
  }
`;
