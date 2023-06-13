import './App.css';
import Login from './components/Login';
import CreateTripForm from './components/YourTrip/YourTripDetails/CreateTripForm';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Login />
      <CreateTripForm />
    </ApolloProvider>
  );
}

export default App;
