import { gql } from '@apollo/client';
export const categoriesGQL = gql`
  query Product($slug: ID!, $after: String) {
    productCategories {
      nodes {
        count
        id
        name
        slug
      }
    }
    productCategory(id: $slug, idType: SLUG) {
      id
      name
      slug
      products(after: $after, first: 12, where: { orderby: { field: DATE } }) {
        nodes {
          image {
            altText
            fileSize
            sizes
            slug
            sourceUrl
            srcSet
            title
            uri
          }
          shortDescription
          link
          menuOrder
          id
          sku
          slug
          status
          name
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export const PaginationGQL = gql`
  query Product($slug: ID!, $after: String) {
    productCategory(id: $slug, idType: SLUG) {
      id
      name
      slug
      products(after: $after, first: 12, where: { orderby: { field: DATE } }) {
        nodes {
          image {
            altText
            fileSize
            sizes
            slug
            sourceUrl
            srcSet
            title
            uri
          }
          shortDescription
          link
          menuOrder
          id
          sku
          slug
          status
          name
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
export const productByCategoryGQL = gql`
  query Product($_id: ID!) {
    productCategory(id: $_id) {
      name
      slug
      products {
        nodes {
          name
        }
      }
    }
  }
`;

export const allCategories = gql`
  query allCategories {
    productCategories {
      nodes {
        count
        id
        name
        slug
      }
    }
  }
`;
