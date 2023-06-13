import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import Login from './components/Login';
import CreateTripForm from './components/YourTrip/YourTripDetails/CreateTripForm';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route
              path="/" 
              element={<Home />}
          />
          <Route
              path="/login" 
              element={<Login />}
          />
          <Route
              path="/sign-up" 
              element={<SignUp />}
          />
        </Routes>
      </Router>
      <CreateTripForm />
    </ApolloProvider>
  );
}

export default App;
