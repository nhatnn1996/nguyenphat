import { gql } from '@apollo/client';
export const searchNewsGQL = gql`
  query News($search: String) {
    posts(where: { search: $search }) {
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
export const newsGQL = gql`
  query News($categoryName: String) {
    posts(where: { categoryName: $categoryName }) {
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
        excerpt
        content
        slug
        title
        postId
        date
      }
    }
  }
`;
export const newNewsGQL = gql`
  query News {
    posts(first: 4) {
      nodes {
        featuredImage {
          node {
            sourceUrl
            uri
            title
            srcSet
          }
        }
        slug
        title
        uri
        date
        content
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
      databaseId
      comments {
        nodes {
          content
          date
          author {
            node {
              email
              databaseId
              url
              name
            }
          }
        }
      }
    }
  }
`;

export const getNewsbyCategory = gql`
  query news($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      id
      posts {
        nodes {
          id
          slug
        }
      }
    }
  }
`;
export const postComment = gql`
  mutation PostComment(
    $commentOn: Int!
    $content: String!
    $author: String!
    $authorEmail: String!
    $authorUrl: String
    $date: String!
  ) {
    createComment(
      input: {
        commentOn: $commentOn
        content: $content
        author: $author
        authorEmail: $authorEmail
        authorUrl: $authorUrl
        date: $date
      }
    ) {
      success
      comment {
        content
        approved
      }
    }
  }
`;
