/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTesting = /* GraphQL */ `
  query GetTesting($id: ID!) {
    getTesting(id: $id) {
      content
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTestings = /* GraphQL */ `
  query ListTestings(
    $filter: ModelTestingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      authors
      bookId
      description
      image
      owner
      title
      id
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        authors
        bookId
        description
        image
        owner
        title
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
