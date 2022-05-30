import { gql } from '@apollo/client';
// { id: 1, value: "82738728" }
export const formSubmit = gql`
  mutation FormSubmit($name: String, $phone: String, $email: String, $content: String) {
    submitGfForm(
      input: {
        id: "1"
        fieldValues: [
          {
            # Name field value
            id: 1
            value: $name
          }
          {
            # Phone field value
            id: 8
            value: $phone
          }
          {
            # Email field value
            id: 4
            value: $email
          }
          {
            # Content field value
            id: 5
            value: $content
          }
        ]
      }
    ) {
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
