import { gql } from '@apollo/client/core';

const GET_CATEGORIES = gql`
    query Categories {
        categories {
            created_at
            id
            name
            parent_id
        }
    }
`

export default GET_CATEGORIES;