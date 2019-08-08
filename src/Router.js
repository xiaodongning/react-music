import React from 'react';
import Home from './pages/Home'
import PlayList from './pages/PlayLists'
import { Route, Switch } from 'react-router-dom';

const Router = () => { 
  return (

    <Switch>
      <Route exact path="/playlists" component={PlayList} />
      <Route exact path="/" component={Home} />
    </Switch>

  )
}

export default Router;