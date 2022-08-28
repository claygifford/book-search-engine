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

  useEffect(() => {
    // async function create() {
    //   try {
    //     const { user } = await Auth.signUp({
    //       //username,
    //       //password,
    //       username: "claygifford",
    //       password: "B4eanie1",
    //       attributes: {
    //         email: "claygifford@gmail.com",
    //       //  phone_number, // optional - E.164 number convention
    //       // other custom attributes
    //       },
    //       //autoSignIn: {
    //         // optional - enables auto sign in after user is confirmed
    //       //  enabled: true,
    //       //},
    //     });
    //     console.log(user);
    //   } catch (error) {
    //     console.log("error signing up:", error);
    //   }
    //   //}
    // }
    async function create() {
      let validation = await Auth.currentUserInfo();
      console.log(validation);
      let result = await Auth.signIn("claygifford", "B4eanie1");
      console.log(result);
      //const todo = { name: "My first todo", description: "Hello world!" };
      //await API.graphql(graphqlOperation(createTodo, { input: todo }));
      //await API.graphql({
      //  query: createTesting,
      //  variables: { input: {content: 'wut face?'} },
      //});
    }
    console.log('hello world');
    create();
  }, []);
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
