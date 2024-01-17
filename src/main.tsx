import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query';
import { ApolloProvider } from '@apollo/client';
import App from './App'
import './index.css'
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { apolloClient, queryClient } from 'main.config';
import { Test } from 'test';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <ApolloProvider client={apolloClient}>
      {/* <Test/> */}
      <App />
    </ApolloProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
