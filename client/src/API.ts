/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTestingInput = {
  content?: string | null,
  id?: string | null,
  _version?: number | null,
};

export type ModelTestingConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelTestingConditionInput | null > | null,
  or?: Array< ModelTestingConditionInput | null > | null,
  not?: ModelTestingConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Testing = {
  __typename: "Testing",
  content?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTestingInput = {
  content?: string | null,
  id: string,
  _version?: number | null,
};

export type DeleteTestingInput = {
  id: string,
  _version?: number | null,
};

export type CreateBookInput = {
  authors?: Array< string | null > | null,
  bookId?: string | null,
  description?: string | null,
  image?: string | null,
  owner?: string | null,
  title?: string | null,
  id?: string | null,
  _version?: number | null,
};

export type ModelBookConditionInput = {
  authors?: ModelStringInput | null,
  bookId?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type Book = {
  __typename: "Book",
  authors?: Array< string | null > | null,
  bookId?: string | null,
  description?: string | null,
  image?: string | null,
  owner?: string | null,
  title?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateBookInput = {
  authors?: Array< string | null > | null,
  bookId?: string | null,
  description?: string | null,
  image?: string | null,
  owner?: string | null,
  title?: string | null,
  id: string,
  _version?: number | null,
};

export type DeleteBookInput = {
  id: string,
  _version?: number | null,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type ModelTestingFilterInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelTestingFilterInput | null > | null,
  or?: Array< ModelTestingFilterInput | null > | null,
  not?: ModelTestingFilterInput | null,
};

export type ModelTestingConnection = {
  __typename: "ModelTestingConnection",
  items:  Array<Testing | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBookFilterInput = {
  authors?: ModelStringInput | null,
  bookId?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTestingFilterInput = {
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestingFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestingFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBookFilterInput = {
  authors?: ModelSubscriptionStringInput | null,
  bookId?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type CreateTestingMutationVariables = {
  input: CreateTestingInput,
  condition?: ModelTestingConditionInput | null,
};

export type CreateTestingMutation = {
  createTesting?:  {
    __typename: "Testing",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTestingMutationVariables = {
  input: UpdateTestingInput,
  condition?: ModelTestingConditionInput | null,
};

export type UpdateTestingMutation = {
  updateTesting?:  {
    __typename: "Testing",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTestingMutationVariables = {
  input: DeleteTestingInput,
  condition?: ModelTestingConditionInput | null,
};

export type DeleteTestingMutation = {
  deleteTesting?:  {
    __typename: "Testing",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    authors?: Array< string | null > | null,
    bookId?: string | null,
    description?: string | null,
    image?: string | null,
    owner?: string | null,
    title?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    authors?: Array< string | null > | null,
    bookId?: string | null,
    description?: string | null,
    image?: string | null,
    owner?: string | null,
    title?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    authors?: Array< string | null > | null,
    bookId?: string | null,
    description?: string | null,
    image?: string | null,
    owner?: string | null,
    title?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetTestingQueryVariables = {
  id: string,
};

export type GetTestingQuery = {
  getTesting?:  {
    __typename: "Testing",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTestingsQueryVariables = {
  filter?: ModelTestingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestingsQuery = {
  listTestings?:  {
    __typename: "ModelTestingConnection",
    items:  Array< {
      __typename: "Testing",
      content?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTestingsQueryVariables = {
  filter?: ModelTestingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTestingsQuery = {
  syncTestings?:  {
    __typename: "ModelTestingConnection",
    items:  Array< {
      __typename: "Testing",
      content?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    authors?: Array< string | null > | null,
    bookId?: string | null,
    description?: string | null,
    image?: string | null,
    owner?: string | null,
    title?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      authors?: Array< string | null > | null,
      bookId?: string | null,
      description?: string | null,
      image?: string | null,
      owner?: string | null,
      title?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBooksQuery = {
  syncBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      authors?: Array< string | null > | null,
      bookId?: string | null,
      description?: string | null,
      image?: string | null,
      owner?: string | null,
      title?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTestingSubscriptionVariables = {
  filter?: ModelSubscriptionTestingFilterInput | null,
};

export type OnCreateTestingSubscription = {
  onCreateTesting?:  {
    __typename: "Testing",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTestingSubscriptionVariables = {
  filter?: ModelSubscriptionTestingFilterInput | null,
};

export type OnUpdateTestingSubscription = {
  onUpdateTesting?:  {
    __typename: "Testing",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTestingSubscriptionVariables = {
  filter?: ModelSubscriptionTestingFilterInput | null,
};

export type OnDeleteTestingSubscription = {
  onDeleteTesting?:  {
    __typename: "Testing",
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    authors?: Array< string | null > | null,
    bookId?: string | null,
    description?: string | null,
    image?: string | null,
    owner?: string | null,
    title?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    authors?: Array< string | null > | null,
    bookId?: string | null,
    description?: string | null,
    image?: string | null,
    owner?: string | null,
    title?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    authors?: Array< string | null > | null,
    bookId?: string | null,
    description?: string | null,
    image?: string | null,
    owner?: string | null,
    title?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
