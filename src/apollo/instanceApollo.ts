import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client/core";

const API_BASE_URL = import.meta.env.VITE_MAPS_API_URL;
const API_SECRET_KEY = import.meta.env.VITE_MAPS_API_KEY_SECRET;

const httpLink = new HttpLink({
    uri: API_BASE_URL,
    headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': API_SECRET_KEY,
    },
})

const instanceApollo = new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),
})

export default instanceApollo;