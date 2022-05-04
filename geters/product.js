import { gql } from '@apollo/client';
export const productGQL = gql`
  query Product($after: String, $search: String) {
    products(after: $after, first: 4, where: { orderby: { field: DATE }, search: $search }) {
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
      products(after: $after, first: 2, where: { orderby: { field: DATE } }) {
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

export const productDetailGQL = gql`
  query Product($slug: ID!) {
    product(id: $slug, idType: SLUG) {
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
      link
      menuOrder
      productCategories {
        edges {
          node {
            id
            slug
            uri
            name
          }
        }
      }
      description
      shortDescription
      galleryImages {
        nodes {
          mediaDetails {
            file
            meta {
              aperture
              camera
              caption
              title
            }
          }
          date
        }
      }
      sku
      slug
      status
      name
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
