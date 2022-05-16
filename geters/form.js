import { gql } from '@apollo/client';

export const contact = gql`
  mutation MyMutation {
    submitGfForm(input: { id: "1", fieldValues: { id: 1, value: "82738728" } }) {
      errors {
        id
        message
      }
      entry {
        id
        ... on GfSubmittedEntry {
          databaseId
        }
        ... on GfDraftEntry {
          resumeToken
        }
      }
    }
  }
`;
