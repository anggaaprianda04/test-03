import { gql } from '@apollo/client/core';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      quantity
      category_id
      company_id
      created_at
    }
  }
`
export default GET_PRODUCTS;
