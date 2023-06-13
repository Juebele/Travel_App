import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import Login from './components/Login';

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
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
