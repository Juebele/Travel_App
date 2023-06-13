import './App.css';
import Login from './components/Login';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}

export default App;
