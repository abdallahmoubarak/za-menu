import { gql } from "apollo-server-micro";

export const businessDefs = gql`
  type Business {
    id: ID! @id
    name: String!
    businessCode: String!
    businessType: String
    location: Point
    address: String
    region: String
    country: String
    categories: [Category!]! @relationship(type: "ADDED_BY", direction: IN)
    owner: User! @relationship(type: "OWNED_BY", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
