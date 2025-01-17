import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password)
  }
`;


export const FETCH_ONLY_USER = gql`
  query fetchSocialLoginUser {
    fetchSocialLoginUser {
      id
      pet
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      user {
        id
        email
        pet
        isCert
      }

      dog {
        id
        name
        age
        gender
        isNeut
        description
        interests {
          id
          interest
        }
        characters {
          id
          character
        }
        img {
          id
          img
        }
      }
    }
  }
`;
