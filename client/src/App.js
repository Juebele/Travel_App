import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
      <Login />
    </ApolloProvider>
  );
}

export default App;
