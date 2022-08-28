/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTesting = /* GraphQL */ `
  subscription OnCreateTesting($filter: ModelSubscriptionTestingFilterInput) {
    onCreateTesting(filter: $filter) {
      content
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTesting = /* GraphQL */ `
  subscription OnUpdateTesting($filter: ModelSubscriptionTestingFilterInput) {
    onUpdateTesting(filter: $filter) {
      content
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTesting = /* GraphQL */ `
  subscription OnDeleteTesting($filter: ModelSubscriptionTestingFilterInput) {
    onDeleteTesting(filter: $filter) {
      content
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
      authors
      bookId
      description
      image
      owner
      title
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
      authors
      bookId
      description
      image
      owner
      title
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
      authors
      bookId
      description
      image
      owner
      title
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
