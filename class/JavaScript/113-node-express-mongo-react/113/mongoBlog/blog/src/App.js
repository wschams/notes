import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from './Posts';
import NewPost from './NewPost';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React Mongo Blog</h1>
        </header>
        <hr />
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Redirect exact from="/" to="/posts" />
          <Route render={() => <div><h2>404. Page not found</h2></div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
