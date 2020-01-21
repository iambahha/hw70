import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Search from "./containers/Search/Search";
import Movie from './components/Movie/Movie';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/shows/:id" exact component={Movie}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </Layout>
);

export default App;