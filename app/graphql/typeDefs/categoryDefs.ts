import { gql } from "apollo-server-micro";

export const categoryDefs = gql`
  type Category {
    id: ID! @id
    name: String!
    products: [Product!]! @relationship(type: "HAS", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
