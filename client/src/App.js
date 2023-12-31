import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import Footer from './components/Footer'
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import YourTripDashboard from './components/LoggedIn/YourTripDashboard';
import YourTripDetails from './components/LoggedIn/YourTripDetails/YourTripDetails'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
            path="/users/:username"
            element={<Home />}
          />
          <Route
            path="/trips/:tripid"
            element={<YourTripDashboard />}
          />
        </Routes>
      </Router>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;
