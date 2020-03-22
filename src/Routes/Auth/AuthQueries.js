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

export const CONFIRM_SECRET = gql`
  mutation confirmSecret(
    $secret: String!
    $email: String!
  ){
    confirmSecret(
      secret: $secret,
      email : $email
    )
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn(
    $token:String!
    ){
      localUserIn(
        token: $token
      ) @client
    }
`