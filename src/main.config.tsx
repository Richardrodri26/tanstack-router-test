import { QueryClient } from "react-query";
import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
import Cookies from 'js-cookie'

export const httpLink = new HttpLink({
    // uri: import.meta.env.VITE_APP_GRAPH,
    uri: "https://nodejs.softwaretributario.com:3054/graphql",

})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = sessionStorage.getItem(import.meta.env.VITE_APP_KEY_STORAGE);
    const cookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: cookie ? `Bearer ${cookie}` : "",
        }
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) {
        // ToastyAlert.fire("Oops, hubo un error en la consulta, ¡inténtelo más tarde por favor!", undefined, "error")
        console.log(`[Network error]: ${networkError}`)
    };
});

export const apolloClient = new ApolloClient({
    name: "censo",
    version: "0.0.0",
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
});

// react query ----------------------------------------------
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false
        },
    },
})
