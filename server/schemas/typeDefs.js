const { gql } = require('apollo-server-express');

const typeDefs = gql`

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

type User {
    _id: ID
    username: String
    password: String
    trips: [Trip]
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
    editTrip(_id: ID!, tripName: String, location: String, startDate: String, endDate: String, lodgingName: String, lodgingAddress: String, lodgingContact: String): Trip
    deleteTrip(_id: ID!): Trip
}
`;

module.exports = typeDefs;