import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!) {
  addUser(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_TRIP = gql`
mutation addTrip ($userid: ID, $tripName: String!, $location: String!, $startDate: String!, $endDate: String!, $lodgingName: String!, $lodgingAddress: String!, $lodgingContact: String!) {
  addTrip(userid: $userid, tripName: $tripName, location: $location, startDate: $startDate, endDate: $endDate, lodgingName: $lodgingName, lodgingAddress: $lodgingAddress, lodgingContact: $lodgingContact) {
    _id
    tripName
    location
    startDate
    endDate
    lodgingName
    lodgingAddress
    lodgingContact
  }
}
`;

export const EDIT_TRIP = gql`
mutation editTrip($id: ID!, $tripName: String, $location: String, $startDate: String, $endDate: String, $lodgingName: String, $lodgingAddress: String, $lodgingContact: String) {
  editTrip(_id: $id, tripName: $tripName, location: $location, startDate: $startDate, endDate: $endDate, lodgingName: $lodgingName, lodgingAddress: $lodgingAddress, lodgingContact: $lodgingContact) {
    _id
    endDate
    location
    lodgingAddress
    lodgingContact
    lodgingName
    startDate
    tripName
  }
}
`;

export const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}`