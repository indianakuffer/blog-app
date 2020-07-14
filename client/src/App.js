import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from "./screens/Home/Home"
import PostDetails from "./screens/PostDetails/PostDetails"
import PostCreate from "./screens/PostCreate/PostCreate"
import PostEdit from "./screens/PostEdit/PostEdit"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path="/posts/create" exact component={PostCreate} />
        <Route path="/posts/:id/edit" exact component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
