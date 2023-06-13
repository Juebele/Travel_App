import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser ($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      _id
      username
      password
    }
  }
`;