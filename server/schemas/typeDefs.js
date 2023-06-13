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
    startDate: Date
    endDate: Date
    owner: User
    lodging: Lodging
    itinerary: Itinerary
}

type Lodging {
    _id: ID
    name: String
    address: String
    contact: String
    tripID: Trip
}

type Itinerary {
    _id: ID
    date: String
    name: String
    time: String
    description: String
    tripId: Trip
}`