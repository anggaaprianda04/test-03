import instanceApollo from "../apollo/instanceApollo";
import GET_PRODUCTS from "../graphql/queries/getProducts";

export async function getProducts() {
    const response = await instanceApollo.query({ query: GET_PRODUCTS });
    return response.data;
}