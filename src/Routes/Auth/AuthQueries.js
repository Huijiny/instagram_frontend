import {gql} from "apollo-boost"

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $firstname: String
    $lastname: String
){
    createAccount(
    username: $username
    email:  $email
    firstname: $firstname
    lastname: $lastname
    )
  }
`;