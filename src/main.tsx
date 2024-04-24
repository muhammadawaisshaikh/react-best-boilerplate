import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './state/store/index.ts'
import { Provider } from 'react-redux';

import { starWarsAPI } from './core/config.ts'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: starWarsAPI,
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
      
    </Provider>
  </React.StrictMode>,
)
