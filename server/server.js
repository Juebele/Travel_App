const express = require("express");
// const { ApolloServer } = require('apollo-server-express');
const path = require("path");

// const { typeDefs, resolvers } = require('./schemas');
const db = require("./config/connection");
const PORT = process.env.PORT || 3001;
const app = express();

// const apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers
// });

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// const startApolloServer = async () => {
//     await apolloServer.start();
//     apolloServer.applyMiddleware({ app });
    db.once('open', () => {
        console.log('i work - yay!')
        app.listen(PORT, () => {
            console.log("Server running on PORT 3001!");
        })
    })
// }

// startApolloServer();