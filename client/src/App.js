import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import Navbar from './components/Navbar';
import YourTripHome from './components/LoggedIn/YourTripHome';

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
          <Route
              path='/your-trip'
              element={<YourTripHome />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
