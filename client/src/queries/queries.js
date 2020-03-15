import { gql } from "apollo-boost";

//-------------------Get Authors----------------------
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

//---------------------Get books----------------------
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

//---------------------Add Book-----------------------
const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
