import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import UserSearch from "./components/UserSearch";
import CharacterSearch from "./pages/CharacterSearch";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Search" component={Search} />
              <Route exact path="/UserSearch" component={UserSearch} />
              <Route
                exact
                path="/CharacterSearch"
                component={CharacterSearch}
              />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
