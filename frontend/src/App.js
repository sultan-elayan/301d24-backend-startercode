import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import FavPage from './components/FavPage'
import MainPage from './components/MainPage'



export class App extends Component {
  render() {
    return (
      <div>

<Router>
      <div>
     <Header/>
  
        <Switch>
          <Route path="/Favorite">
           <FavPage/>
          </Route>
          
          <Route path="/">
          <MainPage/>
          </Route>
        </Switch>
      </div>
    </Router>
        
      </div>
    )
  }
}

export default App
