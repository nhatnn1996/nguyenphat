import { gql } from '@apollo/client';
export const pagesGQL = gql`
  query Page {
    pages {
      nodes {
        uri
        title
        slug
      }
    }
  }
`;
