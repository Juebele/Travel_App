const { User, Trip, Lodging, Itinerary } = require('../models');

const resolvers = {
    Query: {
        viewUsers: async () => {
            return await User.find();
        }
    },

    Mutation: {
        addUser: async (_, {username, password}) => {
            return await User.create({username, password});
        }
    },
};

module.exports = resolvers;