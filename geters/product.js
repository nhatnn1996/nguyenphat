import { gql } from '@apollo/client';

export const searchProductGQL = gql`
  query Product($search: String) {
    products(where: { search: $search }) {
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
export const productGQL = gql`
  query Product($after: String, $search: String) {
    products(after: $after, first: 8, where: { orderby: { field: DATE }, search: $search }) {
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
        nodes {
          products {
            nodes {
              name
              id
              slug
              image {
                sourceUrl
                srcSet
                title
                uri
                sizes
                link
              }
            }
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

export const productsNewGQL = gql`
  query NewProduct {
    products(first: 6) {
      edges {
        node {
          id
          name
          slug
          image {
            sourceUrl
            srcSet
            title
            uri
          }
        }
      }
    }
  }
`;
