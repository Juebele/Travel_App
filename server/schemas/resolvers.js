const { User, Trip, Itinerary } = require('../models');

const resolvers = {
    Query: {
        viewUsers: async () => {
            return await User.find();
        },
        viewTrips: async () => {
            return await Trip.find();
        }
    },

    Mutation: {
        addUser: async (_, {username, password}) => {
            return await User.create({username, password});
        },
        addTrip: async (_, {tripName, location, startDate, endDate, lodgingName, lodgingAddress, lodgingContact}) => {
            return await Trip.create({tripName, location, startDate, endDate, lodgingName, lodgingAddress, lodgingContact})
        }
    }
    
};

module.exports = resolvers;