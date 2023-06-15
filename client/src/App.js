import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import './App.css';
import Footer from './components/Footer'
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import YourTripDashboard from './components/LoggedIn/YourTripDashboard';

import CreateTripForm from './components/LoggedIn/YourTripDetails/CreateTripForm';
import Footer from './components/Footer'

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
          <Route
              path='/your-trips'
              element={<YourTripDashboard />}
          />
        </Routes>
      </Router>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;
