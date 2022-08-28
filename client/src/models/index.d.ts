import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Testing {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Testing, TestingMetaData>);
  static copyOf(source: Testing, mutator: (draft: MutableModel<Testing, TestingMetaData>) => MutableModel<Testing, TestingMetaData> | void): Testing;
}

export declare class Book {
  readonly id: string;
  readonly authors?: (string | null)[] | null;
  readonly bookId?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly owner?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Book, BookMetaData>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}