import { gql } from "graphql-request";

export const createProductMutation = gql`
  mutation ($categoryId: ID!, $name: String!, $price: Float!) {
    createProducts(
      input: [
        {
          name: $name
          price: $price
          category: { connect: { where: { node: { id: $categoryId } } } }
        }
      ]
    ) {
      products {
        name
        price
        category {
          name
        }
      }
    }
  }
`;
