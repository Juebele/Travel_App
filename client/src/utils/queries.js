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

export const QUERY_USER = gql`
  query User ($username: String!) {
    user (username: $username) {
      _id
      username
      trips {
        tripName
        _id
        location
        startDate
        endDate
        lodgingName
        lodgingAddress
        lodgingContact
      }
    }
  }
`;

export const QUERY_TRIP = gql`
  query Query($tripid: ID!) {
    trip(tripid: $tripid) {
      _id
      tripName
      location
      startDate
      owner {
        username
      }
      endDate
      lodgingName
      lodgingAddress
      lodgingContact
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      username
      _id
      trips {
        tripName
        location
        startDate
        endDate
        lodgingName
        lodgingAddress
        lodgingContact
        _id
      }
    }
  }
`;

export const GET_DATES = gql `
query Query {
  trips {
    endDate
    startDate
  }
}
`