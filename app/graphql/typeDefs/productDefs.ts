import { gql } from "apollo-server-micro";

export const productDefs = gql`
  type Product {
    id: ID! @id
    name: String!
    price: Float
    description: String
    category: Category! @relationship(type: "HAS", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
