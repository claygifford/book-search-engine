import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import { Amplify, API, graphqlOperation } from "aws-amplify";
import {
  createTesting, createTodo,
  updatedTodo,
  deleteTodo,
} from "./graphql/mutations";
import awsconfig from "./aws-exports";

import { Auth } from "aws-amplify";

Amplify.configure(awsconfig);

function App() {
  // const todo = { name: "My first todo", description: "Hello world!" };

  // await API.graphql(graphqlOperation(createTodo, {input: todo}));

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
