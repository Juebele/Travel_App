const { User, Trip, Itinerary } = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent,{username}) => {
            return await User.findOne({username}).populate('trips')
        },
        users: async () => {
            return await User.find().populate('trips');
        },
        trips: async () => {
            return await Trip.find().populate('itinerary');
        },
        trip: async (parent, {tripid}) => {
            return await Trip.findOne({_id: tripid}).populate('itinerary')
        },
        itinerary: async(parent, {itineraryid}) => {
            return await Itinerary.findOne({_id: itineraryid})

        },
        me: async(parent, args, context) => {
            if(context.user) {
                return User.findOne({_id: context.user._id}).populate('trips');
            } throw new AuthenticationError('you must be logged in')
        }
    },

    Mutation: {
        login: async (parent, {username, password}) => {
            const user = await User.findOne({username});
            if(!user) {
                throw new AuthenticationError('no user found with this username');
            }
            const token = signToken(user);
            return {token, user}
        },
        addUser: async (parent, {username, password}) => {
            const user =  await User.create({username, password});
            const token = signToken(user);
            return {token, user}
        },
        addTrip: async (parent, { userid, tripName, location, startDate, endDate, lodgingName, lodgingAddress, lodgingContact}, context) => {
            const trip = await Trip.create({
                tripName, location, startDate, endDate, lodgingName, lodgingAddress, lodgingContact
            })
            await User.findOneAndUpdate({
                _id: userid
            }, {$addToSet: {trips: trip._id}})
            return trip;
        },
        editTrip: async (parent, args, context) => {
            const revisedTrip = await Trip.findOneAndUpdate({ _id: args._id }, args, {
                new: true
            });
            return revisedTrip;
        },
        deleteTrip: async (parent, args, context) => {
            // console.log(context.user); These are both returning undefined
            // console.log(context.trip);
            
            if (context.user) {
                return Trip.deleteOne(
                    { _id: context.user._id },
                    { $pull: { trips: trip } },
                    { new: true }
                );
            }
            throw new AuthenticationError('You must be logged in to make a change.');
        }
    }
};

module.exports = resolvers;