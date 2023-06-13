import { gql } from '@apollo/client';

export const VIEW_USER = gql `
query Query {
    viewUsers {
        _id
        username
        password
    }
  }
`;