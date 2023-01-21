import { gql } from "graphql-request";

export const getCategoriesWithProductsQuery = gql`
  query {
    categories {
      name
      products {
        name
        price
      }
    }
  }
`;

export const createCategoryMutation = gql`
  mutation ($name: String!) {
    createCategories(input: [{ name: $name }]) {
      categories {
        name
      }
    }
  }
`;
