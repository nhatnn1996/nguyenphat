import { gql } from '@apollo/client';
export const productGQL = gql`
  query Product($after: String, $search: String) {
    products(
      after: $after
      first: 4
      where: {orderby: {field: DATE}, search: $search}){
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
    }
  }
`;
export const productDetailGQL = gql`
  query Product($_id: ID!) {
    product(id: $_id) {
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
