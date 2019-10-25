import React from 'react';
import Auth from './Auth';
import {Router} from 'react-router-dom';
import history from './history';
import axios from 'axios';


class App extends React.Component{
  render(){
    return (
      <div>
      <Router history={history}>
      <Auth />
      </Router>
      </div>
    )
  }


}


export default App;