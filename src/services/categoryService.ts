import instanceApollo from "../apollo/instanceApollo";
import GET_CATEGORIES from "../graphql/queries/getCategories";

export async function getCategories() {
    const response = await instanceApollo.query({ query: GET_CATEGORIES });
    return response.data;
}