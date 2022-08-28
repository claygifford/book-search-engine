/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  authors?: Array< string | null > | null,
  bookId?: string | null,
  description?: string | null,
  image?: string | null,
  owner?: string | null,
  title?: string | null,
  id?: string | null,
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
};

export type UpdateBookInput = {
  authors?: Array< string | null > | null,
  bookId?: string | null,
  description?: string | null,
  image?: string | null,
  owner?: string | null,
  title?: string | null,
  id: string,
};

export type DeleteBookInput = {
  id: string,
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
    } | null >,
    nextToken?: string | null,
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
  } | null,
};
