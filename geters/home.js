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
        path
      }
    }
    posts(where: { categoryName: "Dịch Vụ" }) {
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
        slug
        title
        postId
      }
    }
    products {
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
        sku
        slug
        status
        name
      }
    }
    category(id: "tin-tuc", idType: SLUG) {
      id
      posts(where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          content
          slug
          title
          featuredImage {
            node {
              id
              slug
              sourceUrl
              srcSet
              title
              sizes
            }
          }
          date
          excerpt
        }
      }
    }
  }
`;
