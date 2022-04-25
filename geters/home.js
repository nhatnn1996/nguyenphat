import { gql } from '@apollo/client';
export const homeGQL = gql`
  query Home {
    menuItems {
      nodes {
        id
        description
        label
        url
        title
        order
      }
    }
    posts {
      nodes {
        date
        featuredImage {
          node {
            slug
            sourceUrl
            srcSet
            status
            title
            uri
            sizes
          }
        }
      }
    }
    comments {
      nodes {
        date
        content
        type
      }
    }
  }
`;
