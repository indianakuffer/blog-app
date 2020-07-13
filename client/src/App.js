import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from "./screens/Home"
import PostDetails from "./screens/PostDetails"
import PostCreate from "./screens/PostCreate"
import PostEdit from "./screens/PostEdit"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact component={PostDetails} />
        <Route path="/post/create" exact component={PostCreate} />
        <Route path="/post/:id/edit" exact component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
