// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Testing, Book } = initSchema(schema);

export {
  Todo,
  Testing,
  Book
};