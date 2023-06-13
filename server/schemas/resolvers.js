const { User, Trip, Lodging, Itinerary } = require('../models');

const resolvers = {
    Query: {
        viewUsers: async () => {
            return await User.find();
        }
    },

    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);
            return user;
        }
    }
};

module.exports = resolvers;