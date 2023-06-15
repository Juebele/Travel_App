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
    itinerary: [Itinerary]
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
    
}

type Auth  {
    token: ID!
    user: User
    
}

type Query {
    users: [User]
    user (username:String): User
    trip (tripid: ID!): Trip 
    trips: [Trip]
    itinerary (itineraryid: ID!): Itinerary
    me: User
}

type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addTrip(userid: ID, tripName: String!, location: String!, startDate: String!, endDate: String!, lodgingName: String!, lodgingAddress: String!, lodgingContact: String!): Trip
    
}
`;

module.exports = typeDefs;