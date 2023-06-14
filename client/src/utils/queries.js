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

export const GET_DATES = gql `
query Query {
  viewTrips {
    endDate
    startDate
  }
}
`