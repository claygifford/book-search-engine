// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Testing } = initSchema(schema);

export {
  Todo,
  Testing
};