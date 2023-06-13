const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    password: String
    trips: [Trip]
}

type Trip {
    _id: ID
    tripName: String
    location: String
    startDate: String
    endDate: String
    owner: User
    itinerary: Itinerary
    lodgingName: String
    lodgingAddress: String
    lodgingContact: String
}

type Itinerary {
    _id: ID
    date: String
    name: String
    time: String
    description: String
    tripId: Trip
}

type Query {
    viewUsers: [User]
}

type Mutation {
    addUser(username: String!, password: String!): User
}
`;

module.exports = typeDefs;